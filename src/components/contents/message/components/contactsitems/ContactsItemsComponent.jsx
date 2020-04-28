import React from 'react'
import ContactsItems from './ContactsItems'
import MyContext from '../../../../../redux/context'

const ContactsItemsComponent = () => {
	
	return <MyContext.Consumer>
	{ (store) => {
		let contactsArray = store.getState().messages.contactsArray
			console.log(contactsArray)
		return <ContactsItems contactsArray = {contactsArray}/>
	}

	}
	</MyContext.Consumer>
	
}
export default ContactsItemsComponent