import React from 'react'
import MessageItem from './MessageItem'

const MessageItemComponent = (props) => {
	let messageItem = props.messageArray.map(m => <MessageItem key ={m.id} id = {m.id} text = {m.messageText} />)
	return(
		<div className="messages__messagesitems">
			{messageItem}
		</div>
	)
}
export default MessageItemComponent
