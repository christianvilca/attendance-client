import React from 'react';
import HeaderMain from '../Organisms/HeaderMain.jsx';
import Search from '../Molecules/Search.jsx';
import { INSTITUTION_LIST } from '../../apollo/queries/institution';

const Instituions = () => {
	return (
		<>
			<HeaderMain title="Instituciones" />
			<Search
				href="/institution/new"
				query={INSTITUTION_LIST}
			/>
		</>
	);
};

export default Instituions;
