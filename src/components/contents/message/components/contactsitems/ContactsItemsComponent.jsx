import React from 'react'
import {connect} from 'react-redux'
import ContactItemComponent from './components/ContactItemComponent'


const mapStateToProps = (state) => ({
	contactsArray: state.messages.contactsArray
})


const ContactsItemsComponent = connect(mapStateToProps)(ContactItemComponent) 

export default ContactsItemsComponent