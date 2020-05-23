import {getApi} from '../api/api'

const ADD_POST = 'ADD-POST'
const NEW_TEXT_CHANGE_POST = 'NEW-TEXT-CHANGE-POST'
const SET_PROFILE = 'SET_PROFILE'
const IS_LOADER = 'IS_LOADER'

let initialState = {
	profileArray: [
	],
	postsArray: [
	],
	textChangePost: 'Добавить пост',
	isLoader: true
}	

const profileReduser = (state = initialState, action) => {

	const addPost = (addPostText) =>({
		...state,
		postsArray: [
			...state.postsArray,
			{
				text: addPostText
			}
		],
		textChangePost: ''
	})
	const changePost = (textChangePost) =>({
		...state,
		textChangePost
	})

	const setProfile = (profileArray, textPosts) =>({
		...state,
		profileArray: [profileArray],
		postsArray: [
		...state.postsArray,
		{
			text: textPosts
		}]
	})

	const isLoader = (bool) => ({
		...state,
		isLoader: bool
	})

	switch(action.type){
		case ADD_POST: {
			return addPost(action.addPostText)
		}		
		case NEW_TEXT_CHANGE_POST: {
			return changePost(action.textChange)
		}
		case SET_PROFILE: {
			return setProfile(action.profile, action.post)
		}
		case IS_LOADER: {
			return isLoader(action.bool)
		}	
		default: 
			return state
	}	
}


export const addPost = (addPostText) => ({
	type: ADD_POST,
	addPostText
})

export const changePost = (textChange) => ({
	type: NEW_TEXT_CHANGE_POST,
	textChange
})

export const setProfile = (profile,post) => ({
	type: SET_PROFILE,
	profile,
	post	
})

export const isLoader = (bool) => ({
	type: IS_LOADER,
	bool
})

export const getProfile = (userId = 2) => {
	return (dispatch) => {
		dispatch(isLoader(true))
		getApi.Profile(userId)
		.then(data => {
			dispatch(setProfile(data, data.lookingForAJobDescription))
			dispatch(isLoader(false))	
		})
	}
}

export default profileReduser
