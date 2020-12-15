import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import parseJwt from '../../helpers/jwt'

const Public = ({ component: Component, ...rest }) => {
	const userLogged = localStorage.getItem('token')

	if ( userLogged ) {
		console.log("Public")
		const access = parseJwt(localStorage.getItem('token'))

		let redirect = "/"
		if (access.roles.includes("MASTER")) { redirect = "/institutions" } else
		if (access.roles.includes("INSTITUTION")) { redirect = "/managers" } else
		if (access.roles.includes("MANAGER" )) { redirect = "/catequesisList" } else
		if (access.roles.includes("CATEQUISTA")) { redirect = "/catequesis" } else { redirect = "/asistencia" }
		return <Redirect to={redirect} />
	}

  return <Route {...rest} component={Component} />

}

export default Public
