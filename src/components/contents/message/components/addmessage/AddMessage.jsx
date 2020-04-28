import React from 'react'

const AddMessage = (props) => {

	let addMessage = () =>{
		props.addMessage(props.textChangeMessage)
	}

	let newTextChangeMessage = (e) =>{

		let textareaValue = e.target.value
		props.newTextChangeMessage(textareaValue)
	}

	return(
		<div className="messages__add">
			<textarea onChange = {newTextChangeMessage} value = {props.textChangeMessage}/>
			<button onClick = {addMessage}>Отправить сообщение</button>
		</div>
	)
}
export default AddMessage