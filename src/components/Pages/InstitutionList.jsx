import React from 'react';
import HeaderMain from '../Organisms/HeaderMain.jsx';
import Search from '../Molecules/Search.jsx';
import { INSTITUTION_LIST } from '../../apollo/queries/institution';

const InstitutionList = () => {
	return (
		<>
			<HeaderMain title="Instituciones" />
			<Search
				href="/institution/new"
				item="/institution/"
				query={INSTITUTION_LIST}
			/>
		</>
	);
};

export default InstitutionList;