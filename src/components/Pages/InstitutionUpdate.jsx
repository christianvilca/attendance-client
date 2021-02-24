import React from 'react';
import InstitutionDetail from './InstitutionDetail.jsx';
import { GET_INSTITUTION } from '../../apollo/queries/institution';
import Query from '../../apollo/Query.jsx';

const InstitutionUpdate = ({ match, ...props }) => {
	//console.log("props", props);

	return (
		<div>
			<Query
				query={GET_INSTITUTION}
				variables={{
					id: match.params.id
				}}
				classes="spinner-list"
				{...props}
			>
				{({ getInstitutionByid: data }) =>
					data ? (
						<InstitutionDetail id={match.params.id} data={data} {...props}/>
					) : (
						<span>No hay registro</span>
					)}
			</Query>
		</div>
	);
};

export default InstitutionUpdate;
