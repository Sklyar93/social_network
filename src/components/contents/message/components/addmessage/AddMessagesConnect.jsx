import React from 'react'
import {getMessage} from '../../../../../redux/message-reducer'
import {connect} from 'react-redux'
import AddMessageForm from './AddMessageForm'


const AddMessagesComponent = (props) =>{
	
	const onSubmit = (data) => {
		props.getMessage(data.newMessage)
	}

	return(
		<>
			<AddMessageForm onSubmit = {onSubmit} />
		</>
	)
}


const mapStateToProps = (state) => ({
	state: state
})  

const AddMessagesConnect = connect(mapStateToProps,{getMessage})(AddMessagesComponent) 

export default AddMessagesConnect