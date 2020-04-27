const ADD_POST = 'ADD-POST'
const NEW_TEXT_CHANGE_POST = 'NEW-TEXT-CHANGE-POST'

let initialState = {
	postsArray: [
		{id: 0, namePost: 'Как хранить огурцы?', like: '3', textPost: 'Задача организации, в особенности же постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять'},
		{id: 1, namePost: 'Всем привет', like: '2', textPost: 'Задача организации, в особенности же постоянное информационно-пропагандистское'}
	],
	textChangePost: 'Добавить пост'
}	

const profileReduser = (state = initialState, action) => {
	const _addPost = (addPostText) =>{
		let addPost = state.postsArray.unshift({id: 2, namePost:"добавление поста", textPost: addPostText})
		state.textChangePost = ''
	}
	const _newTextChage = (textChange) =>{
		state.textChangePost = textChange
	}

	switch(action.type){
		case ADD_POST:
			_addPost(action.addPostText)
			return state
		case NEW_TEXT_CHANGE_POST: 
			_newTextChage(action.textChange)
			return state
		default: 
			return state
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

export default profileReduser
