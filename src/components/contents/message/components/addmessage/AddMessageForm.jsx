import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {maxLength, Input} from '../../../../../utils/validation/form/validations'

const maxlenght20 = maxLength(20)

const AddMessage = (props) => {
	const { handleSubmit, pristine, reset, submitting } = props
	return(
		<form onSubmit = {handleSubmit}>
			<Field name= 'newMessage' component = {Input} validate = {[maxlenght20]} type="text"/>
			<button disabled={pristine || submitting} >Отправить сообщение</button>
		</form>
	)

}

const AddMessageForm = reduxForm({
	form: 'message'
})(AddMessage)

export default AddMessageForm