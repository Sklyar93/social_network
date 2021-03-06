import {getApi} from '../api/api'

const SET_NEW_POST = 'SET_NEW_POST'
const SET_PROFILE = 'SET_PROFILE'
const IS_LOADER = 'IS_LOADER'

let initialState = {
	profileArray: [
	],
	postsArray: [
	],
	isLoader: true,
	isMe: false
}	

const profileReducer = (state = initialState, action) => {

	const setNewPost = (text) =>({
		...state,
		postsArray: [
			...state.postsArray,
			{
				text: action.text
			}
		],
	})


	const setProfile = (profileArray, textPosts, isMe) =>({
		...state,
		profileArray: [profileArray],
		postsArray: [
		...state.postsArray,
		{
			text: textPosts
		}],
		isMe: isMe
	})

	const isLoader = (bool) => ({
		...state,
		isLoader: bool
	})

	switch(action.type){
		case SET_NEW_POST: {
			return setNewPost(action.text)
		}		
		case SET_PROFILE: {
			return setProfile(action.profile, action.post, action.isMe)
		}
		case IS_LOADER: {
			return isLoader(action.bool)
		}	
		default: 
			return state
	}	
}


export const setNewPost = (text) => ({
	type: SET_NEW_POST,
	text
})


export const setProfile = (profile,post, isMe) => ({
	type: SET_PROFILE,
	profile,
	post,
	isMe	
})

export const isLoader = (bool) => ({
	type: IS_LOADER,
	bool
})

export const getProfile = (userId,isMe) => {
	return (dispatch) => {
		dispatch(isLoader(true))
		getApi.Profile(userId)
		.then(data => {
			dispatch(setProfile(data, data.lookingForAJobDescription, isMe))

			dispatch(isLoader(false))	
		})
	}
}

export const getNewPost = (text) => {
	return (dispatch) => {
		dispatch(setNewPost(text))
	}
}

export default profileReducer
