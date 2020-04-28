import React from 'react'
import ContactsItemsComponent from './components/contactsitems/ContactsItemsComponent'
import MessagesItemsComponent from './components/messageitems/MessagesItemsComponent'
import AddMessageComponent from './components/addmessage/AddMessageComponent'

const Messages = () => {
	return(
		<div className="messages">
			<ContactsItemsComponent />
			{<MessagesItemsComponent />} 
			<AddMessageComponent />
		</div>
	)
}
export default Messages