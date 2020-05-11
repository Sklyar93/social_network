import React from 'react'

const AddMessage = (props) => {

	let addMessage = () =>{
		props.addMessage(props.textChangeMessage)
	}

	let newTextChangeMessage = (e) =>{
		console.log(props.textChangeMessage)
		let textareaValue = e.target.value
		props.newTextChangeMessage(textareaValue)
	}

	return(
		<div>
			<textarea onChange = {newTextChangeMessage} value = {props.textChangeMessage}/>
			<button onClick = {addMessage}>Отправить сообщение</button>
		</div>
	)
}
export default AddMessage