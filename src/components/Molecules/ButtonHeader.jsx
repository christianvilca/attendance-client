import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../Atoms/Icon.jsx';

const ButtonHeader = ({ to, icon, classes, history }) => {
	const goBack = (e) => {
		history.goBack();
		//history.push('/Institution');
	};

	const toggle = (e) => {
		const nav = document.getElementById('main-nav');
		nav.classList.toggle('show');
	};

	return (
		<Fragment>
			{to === 'goBack' ? (
				<a href="#" className={classes} onClick={goBack}>
					<Icon svg={icon} className="class-svg" title={icon} />
				</a>
			) : to === 'toggle' ? (
				<a href="#" className={classes} onClick={toggle}>
					<Icon svg={icon} className="class-svg" title={icon} />
				</a>
			) : (
				<NavLink to={to} className={classes}>
					<Icon svg={icon} classes="class-svg" title={icon} />
				</NavLink>
			)}
		</Fragment>
	);
};

export default ButtonHeader;
