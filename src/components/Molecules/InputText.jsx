import React from 'react';

const InputText = ({label: Label, ...props}) => {
	return (
		<div className="group">
			<input className="input" type="text" required {...props} />
			<span className="bar" />
			<label className="label" >{Label}</label>
		</div>
	);
};

export default InputText;
