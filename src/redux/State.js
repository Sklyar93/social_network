import {renderEntireTree} from '../Render'

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
	Profile: {
		postsArray: [
			{id: 0, namePost: 'Как хранить огурцы?', like: '3', textPost: 'Задача организации, в особенности же постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять'},
			{id: 1, namePost: 'Всем привет', like: '2', textPost: 'Задача организации, в особенности же постоянное информационно-пропагандистское'}
		],
		newPostChange: 'привет'
	}
	
}

export let addPost = () =>{
	let addPost = State.Profile.postsArray.unshift({id: 2, namePost:"добавление поста", textPost: State.Profile.newPostChange})
	State.Profile.newPostChange = ''
	renderEntireTree(State)
}

export let newTextChage = (TextChage) => {
	State.Profile.newPostChange = TextChage
	renderEntireTree(State)
}


export default State