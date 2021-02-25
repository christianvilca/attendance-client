import React, { Fragment } from 'react'
import Header from '../Organisms/Header.jsx';
import InstitutionForm from '../Pages/InstitutionForm.jsx';

const ContainerEntityDetail = ({ to, id, data, history, ...props }) => {
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
			<InstitutionForm
				to={to}
				id={id}
				data={data}
				history={history}
			/>
		</Fragment>
	)
}

export default ContainerEntityDetail
