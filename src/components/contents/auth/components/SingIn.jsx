import React from 'react'
import {connect} from 'react-redux'
import {reduxForm, Field} from 'redux-form'
import {singInAuth} from '../../../../redux/auth-reduser'

const SingInForm = (props) => {
	return (
		<form onSubmit = {props.handleSubmit}>
			<h4>Войти в профиль</h4>
			<Field name = 'login' placeholder = 'Введите логин' component = 'input' />
			<Field name = 'password' type='password' placeholder = 'Введите пароль' component = 'input' />
			<div>
				<Field name = 'rememberMe' type="checkbox" component = 'input' />
				<span>Запомнить меня</span>
			</div>
			<button>Войти</button>
		</form>
	)
}

const SingInComponent = reduxForm({
	form: 'singIn'
})(SingInForm)


const SingIns = (props) => {
	
	const onSubmit = (formData) => {
		props.singInAuth(formData.login, formData.password, formData.remeberMe, true)
	}

	return(
		<>
			<SingInComponent onSubmit = {onSubmit}/>
		</>
	)
}
const mapStateToProps = (state) => ({
	state: state
})

const SingIn = connect(mapStateToProps, {singInAuth})(SingIns)
export default SingIn