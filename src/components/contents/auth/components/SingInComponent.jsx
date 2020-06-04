import React from 'react'
import {connect} from 'react-redux'
import {singInAuth} from '../../../../redux/auth-reduser'
import SingIn from './SingIn'
import {BtnDisabled} from '../../../../redux/selectors/auth-selectors'


const SingInComponent = (props) => {
	
	const onSubmit = (formData) => {
		props.singInAuth(formData.login, formData.password, formData.remeberMe)
	}
	return(
		<SingIn BtnDisabled = {props.BtnDisabled} onSubmit = {onSubmit}/>
	)
}

const mapStateToProps = (state) => ({
	BtnDisabled: BtnDisabled(state)	
})

	
export default connect(mapStateToProps, {singInAuth})(SingInComponent)