import React from 'react'
import {connect} from 'react-redux'
import ContactItem from './ContactItem'


const ContactItemComponent = (props) => {
	let contactItem = props.contactsArray.map( c => <ContactItem key ={c.id} id = {c.id} name = {c.name} img = {c.img} />)
	
	return(
		<div className="messages__contactsitems">
			{contactItem}
		</div>
	)
}



const mapStateToProps = (state) => ({
	contactsArray: state.messages.contactsArray
})


const ContactsItemsComponent = connect(mapStateToProps)(ContactItemComponent) 

export default ContactsItemsComponent