import React from 'react'
import AddMessage from './AddMessage'

const AddMessageComponent = (props) => {
	return (
		<div className="messages__add">
			<AddMessage addMessage = {props.addMessage} newTextChangeMessage = {props.newTextChangeMessage} textChangeMessage = {props.textChangeMessage} />
		</div>
	)
}				
				
export default AddMessageComponent