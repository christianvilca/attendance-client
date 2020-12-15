import React from 'react';
import Header from '../Organisms/Header.jsx';
import InputText from '../Molecules/InputText.jsx'

const InstituionNew = (props) => {
	return (
		<>
			<Header
				title="Institución"

				to1="goBack"
				icon1="arrow-back"
				class1="button-header"

				to2="/institution/qr"
				icon2="qrcode"
				class2="button-header__color"

				{...props}
			/>

			<InputText label="Institucion" />
			<InputText label="Ubicacion" />
			<InputText label="Alias" />
			<InputText label="Imagen" />
			<button>Guardar</button>
		</>
	);
};

export default InstituionNew;
