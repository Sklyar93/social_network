import React from 'react'
import {connect} from 'react-redux'
import {singInAuth} from '../../../../redux/auth-reduser'
import SingIn from './SingIn'


const SingInComponent = (props) => {
	
	const onSubmit = (formData) => {
		props.singInAuth(formData.login, formData.password, formData.remeberMe)
		console.log(props.history)
	}

	return(
		<SingIn onSubmit = {onSubmit}/>
	)
}


	
export default connect(null, {singInAuth})(SingInComponent)