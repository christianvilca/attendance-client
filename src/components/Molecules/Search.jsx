import React, { useState } from 'react';
import Icon from '../Atoms/Icon.jsx';
import { NavLink } from 'react-router-dom';
import CardList from '../Organisms/CardList.jsx';

const Search = ({ children, href, ...props }) => {
	const [ state, setState ] = useState('');

	const handleKeyPress = (e) => {
		if (e.charCode === 13) {
			setState(e.target.value);
		}
	};

	const handleChange = (e) => {
		setState(e.target.value);
	}

	return (
		<div>
			<div className="search">
				<NavLink to={href} className="search__button">
					<Icon svg="plus" classes="class-svg" title="plus" />
				</NavLink>
				<div className="search__box">
					<input type="text" className="search__text" placeholder="Buscar" onKeyPress={handleKeyPress} />
					<div className="search__text__icon">
						<Icon svg="search" classes="class-svg" title="search" />
					</div>
				</div>
			</div>
			<CardList
				variables={{
					filter: state,
					limit: 10
				}}
				{...props}
			/>
		</div>
	);
};

export default Search;
