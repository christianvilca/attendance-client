import React from 'react'
import CatequesisDetail from './CatequesisDetail.jsx';

const CatequesisNew = (props) => {
	const data = {
		name: '',
		year: '',
		hourStart: '',
		hourEnd: '',
		tolerance: '',
		day: '',
		image: ''
	};

	return <CatequesisDetail data={data} {...props} />;

}

export default CatequesisNew
