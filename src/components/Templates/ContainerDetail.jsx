import React, { Fragment } from 'react';
import Header from '../Organisms/Header.jsx';

const ContainerDetail = ({propsHeader, children, ...props}) => {
	return (
		<Fragment>
			<Header
				title={propsHeader.title}
				to1={propsHeader.to1}
				icon1={propsHeader.icon1}
				class1={propsHeader.class1}
				to2={propsHeader.to2}
				icon2={propsHeader.icon2}
				class2={propsHeader.class2}
				history={history}
				{...props}
			/>
			{children}
		</Fragment>
	);
};

export default ContainerDetail;
