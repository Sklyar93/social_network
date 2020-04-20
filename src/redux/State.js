let State =  {
	contactsArray: [
		{id: 0, name: 'Валерий', img: 'src/Avatar/valera.jpeg'},
		{id: 1, name: 'Татьяна', img: 'src/Avatar/tanya.jpeg'},
		{id: 2, name: 'Мистер бин', img: 'src/Avatar/bean.jpeg'}
	],
	messageArray: [
		{id: 0, messageText: 'привет'},
		{id: 1, messageText: 'как дела?'}
	],
	postsArray: [
		{id: 0, namePost: 'Как хранить огурцы?', like: '3', textPost: 'Задача организации, в особенности же постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять'},
		{id: 1, namePost: 'Всем привет', like: '2', textPost: 'Задача организации, в особенности же постоянное информационно-пропагандистское'}
	]
}

export let addPost = (post) =>{
	let addPost = State.postsArray.push({id: 2, namePost:"добавление поста", textPost: post})
	console.log(post)
}

export default State