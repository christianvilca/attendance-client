import React from 'react';
import ContainerEntityForm from '../Templates/ContainerEntityForm.jsx';
import {
	INSTITUTION_LIST,
	GET_INSTITUTION,
	NEW_INSTITUTION,
	UPDATE_INSTITUTION
} from '../../apollo/queries/institution';
import InputText from '../Molecules/InputText.jsx';
import InputImage from '../Molecules/InputImage.jsx';
import Icon from '../Atoms/Icon.jsx';
import { useForm } from '../Atoms/useForm';

const InstitutionDetail = ({ id, data, history, ...props }) => {
	const [ values, handleChange ] = useForm(data);

	const querys = {
		new: NEW_INSTITUTION,
		update: UPDATE_INSTITUTION,
		refreshGet: { query: GET_INSTITUTION, variables: { id } },
		refreshList: { query: INSTITUTION_LIST, variables: { filter: '', limit: 10 } }
	};

	const propsHeader = {
		title: "Institución",
		to1: "goBack",
		icon1: "arrow-back",
		class1: "button-header",
		to2: "/institution/qr",
		icon2: "qrcode",
		class2: "button-header__color",
	}

	const propsForm = {
		to:"/institution/",
		data:data,
		querys:querys,
		values:values
	}

	return (
		<ContainerEntityForm
			history={history}
			propsHeader={propsHeader}
			propsForm={propsForm}
			{...props}
		>
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
		</ContainerEntityForm>
	);
};

export default InstitutionDetail;
