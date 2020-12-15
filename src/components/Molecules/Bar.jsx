import React, { Fragment } from 'react';

const Bar = () => {
	const data = [
		{
			value: 12,
			color: '#4DBD74'
		},
		{
			value: 3,
			color: '#F0AD4E'
		},
		{
			value: 1,
			color: '#D9534F'
		}
	];

	const styleNumber = (color) => {
		return { color: color };
	};

	const styleLine = (color) => {
		return {
			backgroundColor: color
		};
	};

	const styleBlock = (value) => {
		const total = data.map((item) => item.value).reduce((a, b) => a + b);
		const porcent = Math.floor(100 * value / total);
		//const porcent = (value) => Math.floor(100 * value / total);
		return {
			width: porcent + '%'
		}
	};


	return (
		<div className="bar-card">
			{data.map((item, index) => (
				<div key={index} style={styleBlock(item.value)} > {/* className={`width-${porcent(item.value)}`}> */}
					<span className="bar-card__number" style={styleNumber(item.color)}>
						{item.value}
					</span>
					<div
						className="bar-card__line"
						style={styleLine(item.color)}
					/>
				</div>
			))}
		</div>
	);
};

export default Bar;
