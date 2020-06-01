import React from 'react'
import {reduxForm} from 'redux-form'

const ButtonLogOut = (props) => {
	return(
		<form onSubmit ={props.hadleSubmit}>
			<button>Выйти из профиля</button>
		</form>
	)
}



export default reduxForm({form: 'logout'})(ButtonLogOut)