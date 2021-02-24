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
	//const [ image, setImage ] = useState(data.image);
	const [ newInstitution ] = useMutation(NEW_INSTITUTION, {
		onCompleted: (data) => {
			uploadImage(data.newInstitution)
			history.push('/InstitutionList');
		},
		refetchQueries: [ { query: INSTITUTION_LIST, variables: { filter: '', limit: 10 } } ]
	});
	const [ updateInstitution, { loading: mutationLoading, error: mutationError } ] = useMutation(UPDATE_INSTITUTION, {
		/* 			variables: {
				input: { id }
			}, */
		onCompleted: (data) => {
			uploadImage(data.updateInstitution)
			history.push('/InstitutionList');
		},
		refetchQueries: [
			{ query: INSTITUTION_LIST, variables: { filter: '', limit: 10 } },
			{ query: GET_INSTITUTION, variables: { id } }
		]
	});

	const uploadImage = ({id, image}) => {

		if (image === 'true') {
			apiDropbox.uploadFile(document.getElementById('foto1'), id)
		}
  }

	const handleSubmit = (e) => {
		e.preventDefault();

		let valuesInput = { ...values, demo: true };

    if (values.image === '' && !document.getElementById('foto1').src.startsWith('https://')) {
      valuesInput = {...values, image: 'true'}
    }

		if (data.name === '') {
			newInstitution({
				variables: { input: valuesInput }
			});
		} else {
			updateInstitution({
				variables: { input: valuesInput }
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

				<InputImage value={values.image} id={values.id} onChange={handleChange} />

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
