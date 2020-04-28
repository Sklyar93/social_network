import React from 'react'
import {actionCreatorAddMessage, actionCreatorChangeMessage} from '../../../../../redux/message-reduser'
import MyContext from '../../../../../redux/context'
import AddMessage from './AddMessage'

const AddMessageComponent = () => {
	
	return <MyContext.Consumer>
	{ (store) =>
			{	
				let textChangeMessage = store.getState().messages.textChangeMessage

				let addMessage = () =>{
					store.dispatch(actionCreatorAddMessage(textChangeMessage))
				}				

				let newTextChangeMessage = (text) =>{
					store.dispatch(actionCreatorChangeMessage(text))
				}
				
				return <AddMessage addMessage = {addMessage} newTextChangeMessage = {newTextChangeMessage} textChangeMessage = {textChangeMessage}/>
			}

		}
	</MyContext.Consumer> 
	
	

}
export default AddMessageComponent