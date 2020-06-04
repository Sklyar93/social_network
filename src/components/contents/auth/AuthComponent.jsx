import React from 'react'
import {connect} from 'react-redux'
import AuthNavlink from './AuthNavlink'
import Auth from './Auth'

const AuthComponent  = () => {
	return(
		<div>
			<AuthNavlink />
			<Auth />
		</div>
	)
}

export default AuthComponent