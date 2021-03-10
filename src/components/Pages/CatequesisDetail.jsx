import React from 'react'
import ContainerEntityForm from '../Templates/ContainerEntityForm.jsx';
import {
	CATEQUESIS_LIST,
	GET_CATEQUESIS,
	NEW_CATEQUESIS,
	UPDATE_CATEQUESIS
} from '../../apollo/queries/catequesis';
import InputText from '../Molecules/InputText.jsx';
import InputImage from '../Molecules/InputImage.jsx';
import Icon from '../Atoms/Icon.jsx';
import { useForm } from '../Atoms/useForm';

const CatequesisDetail = ({ id, data, history, ...props }) => {
	const [ values, handleChange ] = useForm(data);

	const querys = {
		new: NEW_CATEQUESIS,
		update: UPDATE_CATEQUESIS,
		refreshGet: { query: GET_CATEQUESIS, variables: { id } },
		refreshList: { query: CATEQUESIS_LIST, variables: { filter: '', limit: 10 } }
	};

	const propsHeader = {
		title: "Catequesis",
		to1: "goBack",
		icon1: "arrow-back",
		class1: "button-header",
		to2: "/catequesis/qr/" + values.id,
		icon2: "qrcode",
		class2: "button-header__color",
	}

	const propsForm = {
		to:"/catequesis/",
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
			<InputText name="name" label="Catequesis" value={values.name} onChange={handleChange} />
			<InputText name="year" label="Año" value={values.location} onChange={handleChange} />
			<InputText name="hourStart" label="Hora Inicial" value={values.alias} onChange={handleChange} />
			<InputText name="hourEnd" label="Hora Final" value={values.alias} onChange={handleChange} />
			<InputText name="tolerance" label="Tolerancia" value={values.alias} onChange={handleChange} />

			<InputImage value={values.image} id={values.id} onChange={handleChange} />

			<a href="#" className="align-left button-icon-danger">
				<Icon svg="trash" classes="class-svg" title="trash" />
			</a>
			<button type="submit" className="align-right button-success">
				Guardar
			</button>
		</ContainerEntityForm>
	)
}

export default CatequesisDetail
