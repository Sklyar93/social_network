import React from 'react'
import ContactsItems from './components/ContactsItems'
import MessagesItems from './components/MessagesItems'
import AddMessage from './components/AddMessage'

const Messages = (props) => {
	return(
		<div className="messages">
			<ContactsItems contactsArray={props.messages.contactsArray} />
			<MessagesItems messageArray={props.messages.messageArray} />
			<AddMessage textChangeMessage = {props.messages.textChangeMessage} dispatch = {props.dispatch}/>
		</div>
	)
}
export default Messages