import React from 'react'
import ContactsItemsComponent from './components/contactsitems/ContactsItemsComponent'
import MessagesItemsComponent from './components/messageitems/MessagesItemsComponent'
import AddMessagesConnect from './components/addmessage/AddMessagesConnect'

const Messages = () => {
	return(
		<div className="messages">
			<ContactsItemsComponent />
			<MessagesItemsComponent />
			<AddMessagesConnect />
		</div>
	)
}
export default Messages