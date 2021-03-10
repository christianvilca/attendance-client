import React from 'react';
import CatequesisDetail from './CatequesisDetail.jsx';
import { GET_CATEQUESIS } from '../../apollo/queries/catequesis';
import Query from '../../apollo/Query.jsx';

const CatequesisUpdate = ({ match, ...props }) => {
	return (
		<div>
			<Query
				query={GET_CATEQUESIS}
				variables={{
					id: match.params.id
				}}
				classes="spinner-list"
				{...props}
			>
				{({ getCatequesis: data }) =>
					data ? (
						<CatequesisDetail id={match.params.id} data={data} {...props} />
					) : (
						<span>No hay registro</span>
					)}
			</Query>
		</div>
	);
};

export default CatequesisUpdate;
