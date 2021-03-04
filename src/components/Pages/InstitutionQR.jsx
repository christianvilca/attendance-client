import React from 'react';
import ContainerDetail from '../Templates/ContainerDetail.jsx';
import QRCode  from 'qrcode.react'

const InstitutionQR = ({match, ...props}) => {
	const propsHeader = {
		title: 'Codigo de Institución',
		to1: 'goBack',
		icon1: 'arrow-back',
		class1: 'button-header'
	};

	return (
		<ContainerDetail propsHeader={propsHeader} {...props}>
			<div className="container-detail" >
				<div className="container-detail__qr" >
					<QRCode renderAs="svg" value={match.params.id} size={256} />
				</div>
				<div className="container-detail__text" >

				</div>

			</div>

		</ContainerDetail>
	);
};

export default InstitutionQR;
