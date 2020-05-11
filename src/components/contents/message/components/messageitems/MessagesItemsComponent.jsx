import React from 'react'
import MessageItemComponent from './components/MessageItemComponent'
import {connect} from 'react-redux'


const mapStateToProps = (state) => ({
	messageArray: state.messages.messageArray
})

const MessagesItemsComponent = connect(mapStateToProps)(MessageItemComponent)

export default MessagesItemsComponent
