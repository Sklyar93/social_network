import React from 'react'
import ContactsItemsComponent from './components/contactsitems/ContactsItemsComponent'
import MessagesItemsConnect from './components/messageitems/MessagesItemsConnect'
import AddMessagesConnect from './components/addmessage/AddMessagesConnect'

const Messages = () => {
	return(
		<div className="messages">
			<ContactsItemsComponent />
			<MessagesItemsConnect />
			<AddMessagesConnect />
		</div>
	)
}
export default Messages