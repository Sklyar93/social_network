import React from 'react'
import ContactsItemsComponent from './components/contactsitems/ContactsItemsComponent'
import MessagesItemsComponent from './components/messageitems/MessagesItemsComponent'
import AddMessageComponent from './components/addmessage/AddMessageComponent'

const Messages = (props) => {
	return(
		<div className="messages">
			<ContactsItemsComponent store = {props.store} />
			<MessagesItemsComponent store = {props.store} />
			<AddMessageComponent store = {props.store}/>
		</div>
	)
}
export default Messages