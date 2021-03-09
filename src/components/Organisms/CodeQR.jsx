import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import Tabs from '../Molecules/Tabs.jsx';
import Tab from '../Molecules/Tab.jsx';
import Search from '../Molecules/Search.jsx';
import InputText from '../Molecules/InputText.jsx';
import Icon from '../Atoms/Icon.jsx';

const CodeQR = () => {
	const [ result, handleScan ] = useState('');
	const [ error, handleError ] = useState('');

	const [ checked, setChecked ] = useState('tab-1');
	const [ value, handleChange ] = useState('');

	const handleChecked = (event) => {
		setChecked(event.target.value);
	};

	console.log(error);
	return (
		<div className="container-detail">
			<Tabs start="tab-1">
				<Tab id="tab-1" title="Scanner" icon="qr-scan" checked={checked === 'tab-1'} onChange={handleChecked}>
					{checked === 'tab-1' &&
					<QrReader
						delay={300}
						onError={handleError}
						onScan={handleScan}
						classNameName="qr-reader"
					/>}
				</Tab>
				<Tab id="tab-2" title="Busqueda" icon="search" checked={checked === 'tab-2'} onChange={handleChecked}>
					{checked === 'tab-2' &&
					<InputText name="name" label="Confirmante"  value={value} onChange={handleChange} />
					}
				</Tab>
			</Tabs>
			<div className="container-detail__text">
				<p>{result}</p>
			</div>
		</div>
	);
};

export default CodeQR;
