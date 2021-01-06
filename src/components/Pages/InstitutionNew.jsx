import React from 'react';
import Header from '../Organisms/Header.jsx';
import InputText from '../Molecules/InputText.jsx';
import Institution from './Institution.jsx';

const InstituionNew = (props) => {
	const data = {
		name: '',
		location: '',
		alias: '',
		image: '',
		demo: '',
		email: '',
		qr: ''
	};

	return <Institution data={data} {...props} />;
};

export default InstituionNew;
