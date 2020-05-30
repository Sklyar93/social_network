import React from 'react'
import {reduxForm} from 'redux-form'

const LogOut = (props) => {
	return(
		<form onSubmit ={props.hadleSubmit}>
			<button>Выйти из профиля</button>
		</form>
	)
}

ButtonLogOut = reduxForm({
	form: 'logout'
})(LogOut)


export default ButtonLogOut