import React from 'react'
import Header from '../Organisms/Header.jsx';

const InstitutionQR = (props) => {
	return (
		<>
			<Header
				title="Codigo de Institución"

				to1="goBack"
				icon1="arrow-back"
				class1="button-header"

				{...props}
			/>
			Codigo de Institución
		</>
	)
}

export default InstitutionQR

