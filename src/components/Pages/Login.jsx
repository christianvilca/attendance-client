import React, { useState } from 'react'
import { TextField } from '@material-ui/core';
import { useMutation } from '@apollo/client';
import { AUTENTICAR_USUARIO } from '../../apollo/mutations';
import parseJwt from '../../helpers/jwt'
import InputText from '../Molecules/InputText.jsx'

const authentication = (e, validateUser) => {
  e.preventDefault()
  const form = e.target[0].value
  //console.log(form)
  //console.log(form.email.value)
  //console.log(validateUser)

  const data = {
    /* "usuario": form.email.value,
    "password": form.password.value */
    "usuario": e.target[0].value,
    "password": e.target[1].value
  }

  validateUser({ variables: data }).then(async ({ data }) => {
    //console.log(data.validateUser.token);

		localStorage.setItem('token', data.validateUser.token)

		const access = parseJwt(localStorage.getItem('token'))

		let redirect = "/"
		if (access.roles.includes("MASTER")) { redirect = "/Institution" } else
		if (access.roles.includes("INSTITUTION")) { redirect = "/managers" } else
		if (access.roles.includes("MANAGER" )) { redirect = "/catequesis" } else
		if (access.roles.includes("CATEQUISTA")) { redirect = "/catequistas" } else { redirect = "/asistencia" }
    // Ejecutar el query una vez que se haya iniciado sesion
    // await props.refetch()

		//this.limpiarState()

    // redireccionar
    setTimeout(() => {
      window.location = redirect //"/confirmantes"
      //this.props.history.push('/panel')
    }, 500);
  });
}

const Login = (props) => {

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [validateUser, { error }] = useMutation(AUTENTICAR_USUARIO);

  return (
    <div>
      <form onSubmit={(e) => authentication(e, validateUser)} className="form-body" >
        {error && `${error}` }
        {/* <div><TextField label="email" size="small" value={userEmail} onChange={e => setUserEmail(e.target.value)}/></div>
        <div><TextField label="Contraseña"  value={userPassword} onChange={e => setUserPassword(e.target.value)}/></div> */}
				<InputText label="email" value={userEmail} onChange={e => setUserEmail(e.target.value)}/>
				<InputText label="Contraseña" value={userPassword} onChange={e => setUserPassword(e.target.value)}/>
        <input type="submit" value="Iniciar sesion" className="center-block button-success" />
      </form>
    </div>
  )
}

export default Login

