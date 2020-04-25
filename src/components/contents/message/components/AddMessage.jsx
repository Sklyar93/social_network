import React from 'react'
import {actionCreatorAddMessage, actionCreatorChangeMessage} from '../../../../redux/state'

const AddMessage = (props) => {

	let addMessage = () =>{
		props.dispatch(actionCreatorAddMessage(props.textChangeMessage))
	}

	let newTextChangeMessage = (e) =>{
		let textareaValue = e.target.value
		props.dispatch(actionCreatorChangeMessage(textareaValue))
	}

	return(
		<div className="messages__add">
			<textarea onChange = {newTextChangeMessage} value = {props.textChangeMessage}/>
			<button onClick = {addMessage}>Отправить сообщение</button>
		</div>
	)
}
export default AddMessage