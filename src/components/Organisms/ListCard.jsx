import React from 'react';
import Card from '../Molecules/Card.jsx';
import Query from '../../apollo/Query.jsx';

const ListCard = ({...props}) => {
	return (
		<div>
			<Query classes="spinner-list" {...props} >
				{({ getInstitutionList: data }) =>
					data.length !== 0 ? (
						data.map((item) => {
							return (
								<Card
									key={item.id}
									to={ "/institution/" + item.id}
									image={item.image}
									name={item.name}
									location={item.location}
									alias={item.alias}
								/>
							);
						})
					) : (
						<span>Sin registros</span>
					)}
			</Query>
		</div>
	);
};

export default ListCard;
