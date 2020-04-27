import React from 'react'
import MessagesItems from './MessagesItems'

const MessagesItemsComponent = (props) => {

	let messageArray = props.store.getState().messages.messageArray
	
	return <MessagesItems messageArray = {messageArray}/>
}

export default MessagesItemsComponent
