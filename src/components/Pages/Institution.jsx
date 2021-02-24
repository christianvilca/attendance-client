import React from 'react';
import ContainerEntity from '../Templates/ContainerEntity.jsx';
import { INSTITUTION_LIST } from '../../apollo/queries/institution';

const Institution = () => {
	return (
		<ContainerEntity
			title="Instituciones"
			to="/institution/"
			query={INSTITUTION_LIST}
			limit={10}
		/>
	);
};

export default Institution;
