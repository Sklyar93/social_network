import React from 'react'
import MessageItem from './components/MessageItem'

const MessagesItems = (props) => {
	let messageItem = props.messageArray.map(m => <MessageItem id = {m.id} text = {m.messageText} />)

	return(
		<div className="messages__messagesitems">
			{messageItem}
		</div>

	)
}
export default MessagesItems
