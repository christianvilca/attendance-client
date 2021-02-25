import React, { Fragment } from 'react'
import Header from '../Organisms/Header.jsx';
import EntityForm from '../Pages/EntityForm.jsx';

const ContainerEntityForm = ({ children, to, data, history, querys, values, ...props }) => {
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
			<EntityForm
				to={to}
				data={data}
				history={history}
				querys={querys}
				values={values}
			>
				{ children }
			</EntityForm>
		</Fragment>
	)
}

export default ContainerEntityForm
