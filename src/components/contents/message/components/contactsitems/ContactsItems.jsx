import React from 'react'
import ContactItem from './components/ContactItem'


const ContactsItems = (props) => {
	let contactItem = props.contactsArray.map(c => <ContactItem id = {c.id} name = {c.name} img = {c.img} />)
	
	return(
		<div className="messages__contactsitems">
			{contactItem}
		</div>
	)
}
export default ContactsItems
