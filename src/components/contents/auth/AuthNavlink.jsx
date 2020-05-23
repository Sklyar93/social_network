import React from 'react'
import {NavLink} from 'react-router-dom'

const AuthNavlink = (props) => {
	return (
		<div>
			<NavLink to='/singin'>Войти</NavLink>
			<NavLink to='/singup'>Регистрация</NavLink>
		</div>
	)
} 

export default AuthNavlink