import React from 'react'
import MessageItem from './MessageItem'
import {connect} from 'react-redux'

const MessagesItemsComponent = (props) => {
	
	let messageItem = props.messageArray.map(m => <MessageItem key ={m.id} id = {m.id} text = {m.messageText} />)

	return(
		<div className="messages__messagesitems">
			{messageItem}
		</div>
	)
}


const mapStateToProps = (state) => ({
	messageArray: state.messages.messageArray
})

const MessagesItemsConnect = connect(mapStateToProps)(MessagesItemsComponent)

export default MessagesItemsConnect
