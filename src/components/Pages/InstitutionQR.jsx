import React from 'react';
import ContainerDetail from '../Templates/ContainerDetail.jsx';
import InputText from '../Molecules/InputText.jsx';
import QRCode  from 'qrcode.react'

const InstitutionQR = ({match, ...props}) => {

	const hanldeChange =()=>{}

	const propsHeader = {
		title: 'Codigo de Institución',
		to1: 'goBack',
		icon1: 'arrow-back',
		class1: 'button-header'
	};

	let value = match.params.id

	const formatPhoneNumber = () => {
		let match = value.match(/^(\w{6})(\w{6})(\w{6})(\w{6})$/)
		console.log(match)
		if (match) {
			return '' + match[1] + '-' + match[2] + '-' + match[3] + '-' + match[4]
		}
		return value
	}

	value=formatPhoneNumber()

	return (
		<ContainerDetail propsHeader={propsHeader} {...props}>
			<div className="container-detail" >
				<div className="container-detail__qr" >
					<QRCode renderAs="svg" value={match.params.id} size={256} />
				</div>
				<div className="container-detail__text" >
					<InputText name="name" label="Institución" value={value} onChange={hanldeChange} />
				</div>
			</div>
		</ContainerDetail>
	);
};

export default InstitutionQR;
