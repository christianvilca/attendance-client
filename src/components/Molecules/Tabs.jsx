import React, { useState } from 'react';

const Tabs = ({ start, children }) => {
	const finalFields = children.map((child) => {
		return child;
	});

	return <div className="tabs">{finalFields}</div>;
};

export default Tabs;
