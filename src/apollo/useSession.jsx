import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { USUARIO_ACTUAL } from './queries'

const useSession = () => {
	const userLogged = localStorage.getItem('token')

	const { loading, error, data } = useQuery(USUARIO_ACTUAL);
/* 	const [state, setState] = useState({})

	useEffect(() => {
		if (data && data.getUser) {
			setState(data)
		}
	}, [data]) */
	if (loading) return null;
	if (error) return `Error! ${error.message}`;

	return data; // <Component {...props} session={data} />;
};

export default useSession;
