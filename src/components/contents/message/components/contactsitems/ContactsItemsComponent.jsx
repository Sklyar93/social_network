import React from 'react'
import ContactsItems from './ContactsItems'


const ContactsItemsComponent = (props) => {
	let contactsArray = props.store.getState().messages.contactsArray

	return <ContactsItems contactsArray = {contactsArray}/>

}
export default ContactsItemsComponent