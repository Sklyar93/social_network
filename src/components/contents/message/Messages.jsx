import React from 'react'
import ContactsItemsComponent from './components/contactsitems/ContactsItemsComponent'
import MessagesItemsComponent from './components/messageitems/MessagesItemsComponent'
import AddMessagesComponent from './components/addmessage/AddMessagesComponent'

const Messages = () => {
	return(
		<div className="messages">
			<ContactsItemsComponent />
			<MessagesItemsComponent />
			<AddMessagesComponent />
		</div>
	)
}
export default Messages