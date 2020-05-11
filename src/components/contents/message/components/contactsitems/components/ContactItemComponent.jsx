import React from 'react'
import ContactItem from './ContactItem'


const ContactItemComponent = (props) => {
	let contactItem = props.contactsArray.map( c => <ContactItem key ={c.id} id = {c.id} name = {c.name} img = {c.img} />)
	
	return(
		<div className="messages__contactsitems">
			{contactItem}
		</div>
	)
}
export default ContactItemComponent
