import React from 'react'
import Contact from './components/Contact'
import Message from './components/Message'



const Messages = (props) => {

	let contactItems = props.contactsArray.map(c => <Contact id = {c.id} name = {c.name}  />)
	let messageItems = props.messageArray.map(m => <Message id = {m.id} text = {m.messageText} />)

	return(
		<div>
			 {contactItems}
			 {messageItems}
		</div>
	)
}
export default Messages