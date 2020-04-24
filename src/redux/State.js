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
			]
		},
		profile: {
			postsArray: [
				{id: 0, namePost: 'Как хранить огурцы?', like: '3', textPost: 'Задача организации, в особенности же постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять'},
				{id: 1, namePost: 'Всем привет', like: '2', textPost: 'Задача организации, в особенности же постоянное информационно-пропагандистское'}
			],
			textchagepost: 'Добавить пост'
		}
	},
	getState(){
		return this._state
	},
	_callSubscriber(){},
	_addPost(addPostText){
		let addPost = this._state.profile.postsArray.unshift({id: 2, namePost:"добавление поста", textPost: addPostText})
		this._state.profile.textchagepost = ''
		this._callSubscriber()	
	},
	_newTextChage(textChage){
		this._state.profile.textchagepost = textChage
		this._callSubscriber()
	},
	subscriber(observer){
		this._callSubscriber = observer
	},
	dispatch(action){
		if(action.type === 'ADD-POST'){
			this._addPost(action.addPostText)
		}else if(action.type === 'NEW-TEXT-CHAGE'){
			this._newTextChage(action.textChage)
		}
	} 

}

export default store
window.store = store