import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {email, Input} from '../../../../utils/validation/form/validations'


const SingIn = (props) => {
	const{handleSubmit, pristine, reset, submitting, error} = props
	return (
		<form onSubmit = {props.handleSubmit}>
			<h4>Войти в профиль</h4>
			<Field name = 'login' placeholder = 'Введите логин' type= 'email'  validate = {[email]} component = {Input} />
			<Field name = 'password' type='password' placeholder = 'Введите пароль'  component = {Input} />
			<div>
				<Field name = 'rememberMe' type="checkbox" component = {Input} />
				<span>Запомнить меня</span>
			</div>
			<div>
				{error && <span className = 'erorrInput'>{error}</span>}
			</div>
			<button disabled = {pristine || submitting || props.BtnDisabled}>Войти</button>
		</form>
	)
}

export default reduxForm({
	form: 'singIn'
})(SingIn)

