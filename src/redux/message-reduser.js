const ADD_MESSAGE = 'ADD-MESSAGE'
const NEW_TEXT_CHANGE_MESSAGE = 'NEW-TEXT-CHANGE-MESSAGE'

let initialState = {
	contactsArray: [
		{id: 0, name: 'Валерий', img: 'src/Avatar/valera.jpeg'},
		{id: 1, name: 'Татьяна', img: 'src/Avatar/tanya.jpeg'},
		{id: 2, name: 'Мистер бин', img: 'src/Avatar/bean.jpeg'}
	],
	messageArray: [
		{id: 0, messageText: 'привет'},
		{id: 1, messageText: 'как дела?'}
	],
	textChangeMessage: 'Введите сообщение'
}


const messageReduser = (state = initialState, action) => {
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
	
	switch(action.type){
		case ADD_MESSAGE: 
			_addMessage(action.addMessageText)
			return state
		case NEW_TEXT_CHANGE_MESSAGE:
			_newTextChageMessage(action.textChangeMessage)
			return state
		default:
			return state		
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