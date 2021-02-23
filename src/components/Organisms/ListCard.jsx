import React, { Fragment } from 'react';
import Card from '../Molecules/Card.jsx';
import Spinner from '../Atoms/Spinner.jsx';
import { useQuery } from '@apollo/client';

const ListCard = ({ query, ...props }) => {
	const { loading, error, data } = useQuery(query, { ...props });
	if (loading) return <Spinner classes="spinner-list" />;
	if (error) return `Error! ${error.message}`;

	return (
		<Fragment>
			{data[Object.keys(data)[0]].length !== 0 ? (
				data[Object.keys(data)[0]].map((item) => (
					<Card
						key={item.id}
						to={'/institution/' + item.id}
						image={item.image}
						name={item.name}
						location={item.location}
						alias={item.alias}
					/>
				))
			) : (
				<span>Sin registros</span>
			)}
		</Fragment>
	);
};

export default ListCard;
