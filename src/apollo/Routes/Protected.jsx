import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import parseJwt from '../../helpers/jwt';
import Page404 from '../../components/Pages/Page404.jsx';
import useSession from '../useSession.jsx';
import Query from '../Query.jsx';
import { USUARIO_ACTUAL } from '../queries';

const uri = (regex, path) => {
	return (regex.exec(path)) ? path : ""
	/* const found = path.match(regex)
	return (found) ? found[0] : "" */
}

const Protected = ({ component: Component, path: Path, ...rest }) => {
	const userLogged = localStorage.getItem('token');

	//const user = useSession()

	if (!userLogged) {
		return <Redirect to="/login" />;
	}

	/* if (user && user.getUser) {
		console.log('user.data: ', user.getUser);
	} else {
		localStorage.removeItem('token');
	} */

	//console.log('user: ', user);
	//console.log('user.data: ', user.getUser);

	const access = parseJwt(localStorage.getItem('token'));

	const MASTER = [ '/Institution', '/institution/new', '/confirmantes', uri(/^(\/institution\/)/, Path ) ];
	const INSTITUTION = [ '/Institution', '/instituion' ];
	const MANAGER = [ '/Institution', '/instituion' ];
	const CATEQUISTA = [ '/Institution', '/instituion' ];

	if (
		(access.roles.includes('MASTER') && MASTER.includes(Path)) ||
		(access.roles.includes('INSTITUTION') && INSTITUTION.includes(Path)) ||
		(access.roles.includes('MANAGER') && MANAGER.includes(Path)) ||
		(access.roles.includes('CATEQUISTA') && CATEQUISTA.includes(Path))
	) {
		return (
			<Query query={USUARIO_ACTUAL} classes="spinner-body">
				{({ getUser: data }) =>
					data ? (
						<Route {...rest} render={Component} />
					) : (
						<Fragment>
							{localStorage.removeItem('token')}
							<Redirect to="/login" />;
						</Fragment>
					)}
			</Query>
		);
	} else {
		return <Route component={Page404} />; //<Redirect to="/login" />;
	}
};

export default Protected;
