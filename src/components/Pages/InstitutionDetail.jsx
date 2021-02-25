import React from 'react';
import ContainerEntityDetail from '../Templates/ContainerEntityDetail.jsx';

const InstitutionDetail = ({ id, data, history, ...props }) => {
	return (
		<ContainerEntityDetail
			to='/institution/'
			id={id}
			data={data}
			history={history}
			{...props}
		/>
	);
};

export default InstitutionDetail;
