const ADD_POST = 'ADD-POST'
const NEW_TEXT_CHANGE_POST = 'NEW-TEXT-CHANGE-POST'
const ADD_MESSAGE = 'ADD-MESSAGE'
const NEW_TEXT_CHANGE_MESSAGE = 'NEW-TEXT-CHANGE-MESSAGE'

let store = {
	_state: {
		messages: {
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
		},
		profile: {
			postsArray: [
				{id: 0, namePost: 'Как хранить огурцы?', like: '3', textPost: 'Задача организации, в особенности же постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять'},
				{id: 1, namePost: 'Всем привет', like: '2', textPost: 'Задача организации, в особенности же постоянное информационно-пропагандистское'}
			],
			textChangePost: 'Добавить пост'
		}
	},
	getState(){
		return this._state
	},
	_callSubscriber(){},
	_addPost(addPostText){
		let addPost = this._state.profile.postsArray.unshift({id: 2, namePost:"добавление поста", textPost: addPostText})
		this._state.profile.textChangePost = ''
		this._callSubscriber()	
	},
	_newTextChage(textChange){
		this._state.profile.textChangePost = textChange
		this._callSubscriber()
	},
	_addMessage(addMessageText){
		let addMessage = this._state.messages.messageArray.push({
			id: 3,
			messageText: addMessageText
		})
		this._state.messages.textChangeMessage = ''
		this._callSubscriber()
	},
	_newTextChageMessage(textChangeMessage){
		this._state.messages.textChangeMessage = textChangeMessage
		this._callSubscriber()
	},
	subscriber(observer){
		this._callSubscriber = observer
	},
	dispatch(action){
		if(action.type === ADD_POST){
			this._addPost(action.addPostText)
		}else if(action.type === NEW_TEXT_CHANGE_POST){
			this._newTextChage(action.textChange)
		}else if(action.type === ADD_MESSAGE){
			this._addMessage(action.addMessageText)
		}else if(action.type === NEW_TEXT_CHANGE_MESSAGE){
			this._newTextChageMessage(action.textChangeMessage)
		}
	} 
}

export const actionCreatorAddPost = (text) => ({
	type: ADD_POST,
	addPostText: text
})

export const actionCreatorChangePost = (text) => ({
	type: NEW_TEXT_CHANGE_POST,
	textChange: text
})

export const actionCreatorAddMessage = (text) => ({
	type: ADD_MESSAGE,
	addMessageText: text
})


export const actionCreatorChangeMessage = (text) => ({
		type: NEW_TEXT_CHANGE_MESSAGE,
		textChangeMessage: text
})
export default store
window.store = store