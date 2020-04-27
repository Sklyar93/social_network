import React from 'react'

const MessageItem = (props) => {
	return(
		<div classname="messages__messageitem">
			<p>{props.text}</p>
		</div>

	)
}
export default MessageItem