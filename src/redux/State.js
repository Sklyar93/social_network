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
	addPost(addPostText){
		let addPost = this._state.profile.postsArray.unshift({id: 2, namePost:"добавление поста", textPost: addPostText})
		this._callSubscriber()
		this._state.profile.textchagepost = ''
	},
	newTextChage(TextChage){
		this._state.profile.textchagepost = TextChage
		this._callSubscriber()
	},
	subscriber(observer){
		this._callSubscriber = observer
	} 

}

export default store
window.store = store