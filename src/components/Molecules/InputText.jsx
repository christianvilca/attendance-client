import React, { useState } from 'react';

const InputText = ({label: Label, ...props}) => {

	const [value, setValue] = useState("");

	return (
		<div className="group">
			<input className="input" type="text" value={value} onChange={e => setValue(e.target.value)} required {...props} />
			<span className="bar" />
			<label className="label" >{Label}</label>
		</div>
	);
};

export default InputText;
