import React from 'react';
import InstitutionDetail from './InstitutionDetail.jsx';

const InstituionNew = (props) => {
	const data = {
		name: '',
		location: '',
		alias: '',
		image: '',
		demo: true,
		email: '',
		qr: ''
	};

	return <InstitutionDetail data={data} {...props} />;
};

export default InstituionNew;
