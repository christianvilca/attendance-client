import React, {Fragment} from 'react'
import HeaderMain from '../Organisms/HeaderMain.jsx'

const ContainerMainDetail = ({title, children, ...pros}) => {
	return (
		<Fragment>
			<HeaderMain title={title} />
			{children}
		</Fragment>
	)
}

export default ContainerMainDetail
