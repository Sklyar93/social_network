import React from 'react'
import {actionCreatorAddMessage, actionCreatorChangeMessage} from '../../../../../redux/message-reduser'
import {connect} from 'react-redux'
import AddMessage from './AddMessage'

const mapStateToProps = (state) => ({
	textChangeMessage: state.messages.textChangeMessage
})  

const mapDispatchToProps = (dispatch) => ({
	addMessage: (text) => {
		dispatch(actionCreatorAddMessage(text))
	},
	newTextChangeMessage: (text) => {
		dispatch(actionCreatorChangeMessage(text))
	}
})

const AddMessagesComponent = connect(mapStateToProps,mapDispatchToProps)(AddMessage)

export default AddMessagesComponent