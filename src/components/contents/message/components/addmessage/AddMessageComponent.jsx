import React from 'react'
import {actionCreatorAddMessage, actionCreatorChangeMessage} from '../../../../../redux/message-reduser'
import AddMessage from './AddMessage'

const AddMessageComponent = (props) => {
	
	let textChangeMessage = props.store.getState().messages.textChangeMessage

	let addMessage = () =>{
		props.store.dispatch(actionCreatorAddMessage(textChangeMessage))
	}

	let newTextChangeMessage = (text) =>{
		props.store.dispatch(actionCreatorChangeMessage(text))
	}

	return <AddMessage addMessage = {addMessage} newTextChangeMessage = {newTextChangeMessage} textChangeMessage = {textChangeMessage}/>
}
export default AddMessageComponent