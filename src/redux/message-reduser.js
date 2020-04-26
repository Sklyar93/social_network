const ADD_MESSAGE = 'ADD-MESSAGE'
const NEW_TEXT_CHANGE_MESSAGE = 'NEW-TEXT-CHANGE-MESSAGE'

const messageReduser = (state,action) => {
	const _addMessage = (addMessageText) =>{
		let addMessage = state.messageArray.push({
			id: 3,
			messageText: addMessageText
		})
		state.textChangeMessage = ''
	}
	const _newTextChageMessage = (textChangeMessage) =>{
		state.textChangeMessage = textChangeMessage
		
	}
	if(action.type === ADD_MESSAGE){
		_addMessage(action.addMessageText)
	}else if(action.type === NEW_TEXT_CHANGE_MESSAGE){
		_newTextChageMessage(action.textChangeMessage)
	}
}


export const actionCreatorAddMessage = (text) => ({
	type: ADD_MESSAGE,
	addMessageText: text
})


export const actionCreatorChangeMessage = (text) => ({
		type: NEW_TEXT_CHANGE_MESSAGE,
		textChangeMessage: text
})

export default messageReduser