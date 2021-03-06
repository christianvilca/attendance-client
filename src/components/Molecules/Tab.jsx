import React from 'react';
import Icon from '../Atoms/Icon.jsx';

const Tabs = ({ id, title, icon, checked, onChange, children }) => {
	return (
		<div className="tab">
			<input
				type="radio"
				id={id}
				name="tab-group-1"
				value={id}
				checked={checked}
				onChange={onChange}
			/>
			<label htmlFor={id}>
				<div className="menu-item__icon">
					<Icon svg={icon} classes="class-svg" title="Facebook" />
				</div>
				{ title }
			</label>
			<div className="content">{children}</div>
		</div>
	);
};

export default Tabs;
