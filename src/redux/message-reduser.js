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

	const addMessage = (addMessageText) =>({
		...state,
		messageArray: [
			...state.messageArray,
			{
				id: 3,
				messageText: addMessageText
			}
		],
		textChangeMessage: ''
	})

	const newTextChageMessage = (textChangeMessage) =>({
		...state,
		textChangeMessage: textChangeMessage
	})
	
	switch(action.type){
		case ADD_MESSAGE: 
			return addMessage(action.addMessageText)
		case NEW_TEXT_CHANGE_MESSAGE:
			return newTextChageMessage(action.textChangeMessage)
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