import React, { Fragment, useState } from 'react'
import HeaderMain from '../Organisms/HeaderMain.jsx';
import Search from '../Molecules/Search.jsx';
import CardList from '../Organisms/CardList.jsx';

const ContainerEntity = ({title, to, query, limit }) => {
	const [ filter, handleChange ] = useState('');

	return (
		<Fragment>
			<HeaderMain title={title} />
			<Search
				to={ to + 'new'}
				onChange={handleChange}
			/>
			<CardList
				to={ to }
				query={query}
				variables={{
					filter: filter,
					limit: limit
				}}
			/>
		</Fragment>
	)
}

export default ContainerEntity
