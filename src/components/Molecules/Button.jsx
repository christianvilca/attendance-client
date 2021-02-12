import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className = '', children, ...props }) => {
	let classNames = [ 'btn', className ].filter(Boolean).join(' ').trim();

	return (
		<button
			className={classNames}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;

Button.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.node.isRequired
};
