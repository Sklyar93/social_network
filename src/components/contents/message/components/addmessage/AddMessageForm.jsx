import React from 'react'
import {reduxForm, Field} from 'redux-form'

class AddMessage extends React.Component{

	render(){
		return(
		<form onSubmit = {this.props.handleSubmit}>
			<Field name= 'newMessage' component = 'textarea' onChange = {this.onMessageChange} />
			<button>Отправить сообщение</button>
		</form>
	)

	}
}

const AddMessageForm = reduxForm({
	form: 'message'
})(AddMessage)

export default AddMessageForm