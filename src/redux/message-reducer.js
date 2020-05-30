const NEW_MESSAGE = 'NEW_MESSAGE'


let initialState = {
	contactsArray: [
		{id: 0, name: 'Валерий', img: 'src/Avatar/valera.jpeg'},
		{id: 1, name: 'Татьяна', img: 'src/Avatar/tanya.jpeg'},
		{id: 2, name: 'Мистер бин', img: 'src/Avatar/bean.jpeg'}
	],
	messageArray: [
		{id: 0, messageText: 'привет'}
	]
}


const messageReducer = (state = initialState, action) => {

	const newMessage = (text) =>({
		...state,
		messageArray: [
			...state.messageArray, {id: 1, messageText: action.text}
		]
	})

	
	switch(action.type){
		case NEW_MESSAGE: 
			return newMessage(action.text)
		default:
			return state		
	}

}

 const newMessage = (text) => ({
	type: NEW_MESSAGE,
	text
})

export const getMessage = (text) => {
	console.log(text)
	return (dispatch) => {
		dispatch(newMessage(text))
	}
}


export default messageReducer