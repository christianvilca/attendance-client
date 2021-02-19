import React, { Fragment } from 'react';
import { useForm } from '../Atoms/useForm';
import InputText from '../Molecules/InputText.jsx';
import InputImage from '../Molecules/InputImage.jsx';
import { useMutation } from '@apollo/client';
import {
	INSTITUTION_LIST,
	GET_INSTITUTION,
	NEW_INSTITUTION,
	UPDATE_INSTITUTION
} from '../../apollo/queries/institution';
import Header from '../Organisms/Header.jsx';
import Icon from '../Atoms/Icon.jsx';
import { apiDropbox } from 'helpers';

const Institution = ({ id, data, history, ...props }) => {
	const [ values, handleChange ] = useForm(data);
	const [ newInstitution ] = useMutation(NEW_INSTITUTION, {
		onCompleted: (data) => {
			console.log(data.newInstitution.id)
			uploadImage(data.newInstitution.id)
			history.push('/institutions');
		},
		refetchQueries: [ { query: INSTITUTION_LIST, variables: { filter: '', limit: 10 } } ]
	});
	const [ updateInstitution, { loading: mutationLoading, error: mutationError } ] = useMutation(UPDATE_INSTITUTION, {
		/* 			variables: {
				input: { id }
			}, */
		onCompleted: (data) => {
			console.log(data)
			uploadImage(data.updateInstitution.id)
			history.push('/institutions');
		},
		refetchQueries: [
			{ query: INSTITUTION_LIST, variables: { filter: '', limit: 10 } },
			{ query: GET_INSTITUTION, variables: { id } }
		]
	});

	const uploadImage = (id) => {
    apiDropbox.uploadFile(document.getElementById('foto1').src, id)
  }

	const handleSubmit = (e) => {
		e.preventDefault();
		const values1 = { ...values, demo: true };
		console.log(values)
		if (data.name === '') {
			console.log(values1)
			newInstitution({
				variables: { input: values1 }
			});
		} else {
			updateInstitution({
				variables: { input: values }
			});
		}
	};

	return (
		<Fragment>
			<Header
				title="Institución"
				to1="goBack"
				icon1="arrow-back"
				class1="button-header"
				to2="/institution/qr"
				icon2="qrcode"
				class2="button-header__color"
				history={history}
				{...props}
			/>
			<form onSubmit={handleSubmit} className="form-body">
				<InputText name="name" label="Institución" value={values.name} onChange={handleChange} />
				<InputText name="location" label="Dirección" value={values.location} onChange={handleChange} />
				<InputText name="alias" label="Alias" value={values.alias} onChange={handleChange} />

				<InputImage value={values.image} codigo={values.id} onChange={handleChange} />

				<a href="#" className="align-left button-icon-danger">
					<Icon svg="trash" classes="class-svg" title="trash" />
				</a>
				<button type="submit" className="align-right button-success">
					Guardar
				</button>
			</form>
			{mutationLoading && <p>Loading...</p>}
			{mutationError && <p>Error :( Please try again</p>}
		</Fragment>
	);
};

export default Institution;
