const ADD_POST = 'ADD-POST'
const NEW_TEXT_CHANGE_POST = 'NEW-TEXT-CHANGE-POST'

const profileReduser = (state,action) =>{
	const _addPost = (addPostText) =>{
		let addPost = state.postsArray.unshift({id: 2, namePost:"добавление поста", textPost: addPostText})
		state.textChangePost = ''
	}
	const _newTextChage = (textChange) =>{
		state.textChangePost = textChange
	}

	if(action.type === ADD_POST){
		_addPost(action.addPostText)
	}else if(action.type === NEW_TEXT_CHANGE_POST){
		_newTextChage(action.textChange)
	}	
	return state
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
