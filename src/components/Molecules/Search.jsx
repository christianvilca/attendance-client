import React, { Fragment } from 'react';
import Icon from '../Atoms/Icon.jsx';
import { NavLink } from 'react-router-dom';

const Search = ({ to, onChange }) => {
	const handleKeyPress = (e) => {
		if (e.charCode === 13) {
			onChange(e.target.value);
		}
	};

	return (
		<Fragment>
			<div className="search">
				<NavLink to={to} className="search__button">
					<Icon svg="plus" classes="class-svg" title="plus" />
				</NavLink>
				<div className="search__box">
					<input type="text" className="search__text" placeholder="Buscar" onKeyPress={handleKeyPress} />
					<div className="search__text__icon">
						<Icon svg="search" classes="class-svg" title="search" />
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Search;
