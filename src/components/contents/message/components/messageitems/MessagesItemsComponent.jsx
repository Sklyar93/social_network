import React from 'react'
import MessagesItems from './MessagesItems'
import MyContext from '../../../../../redux/context'


const MessagesItemsComponent = () => {

	return <MyContext.Consumer>
		{ (store) => {
			
			let messageArray = store.getState().messages.messageArray

			return <MessagesItems messageArray = {messageArray}/>		
			
			} 
		}
		
	</MyContext.Consumer>
	}	
	
	


export default MessagesItemsComponent
