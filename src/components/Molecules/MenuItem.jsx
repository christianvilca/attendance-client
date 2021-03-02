import React from 'react';
import Icon from '../Atoms/Icon.jsx';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ svg, href, children }) => {

	if (svg) {
		return (
			<NavLink to={href} activeClassName="main-menu__item" className="menu-item">
				<div className="menu-item__icon">
					<Icon svg={svg ? svg : ''} classes="class-svg" title="Facebook" />
				</div>
				<span className="menu-item__text">{children}</span>
			</NavLink>
		);
	} else {
		return (
			<div className="menu-item">
				<span className="menu-item__text">{children}</span>
			</div>
		);
	}
};

export default MenuItem;
