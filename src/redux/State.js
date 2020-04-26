import profileReduser from './profile-reduser'
import messageReduser from './message-reduser'

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
	
	subscriber(observer){
		this._callSubscriber = observer
	},
	dispatch(action){
		profileReduser(this._state.profile, action) 
		messageReduser(this._state.messages, action)
		this._callSubscriber(this._state)
	} 
}



export default store
window.store = store