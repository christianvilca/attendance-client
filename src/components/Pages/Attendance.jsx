import React from 'react';
import ContainerMainDetail from '../Templates/ContainerMainDetail.jsx';
import CodeQR from '../Organisms/CodeQR.jsx';

const Attendance = () => {
	return (
		<ContainerMainDetail title="Asistencias">
			<CodeQR />
		</ContainerMainDetail>
	);
};

export default Attendance;
