import {getApi} from '../api/api'
const SET_USER_AUTH = 'SET_USER_AUTH'

let  initialState = {
	id: null,
	login: null, 
	email: null,
	isAuth: false
}



const authReduser = (state = initialState, action) => {

	const setUserAuth = (id, login, email, isAuth) => ({
		...state,
			id: action.id,
			login: action.login, 
			email: action.email,
			isAuth: action.isAuth
	})

	switch(action.type) {
		case SET_USER_AUTH :
			return setUserAuth(action.id, action.login, action.email, action.isAuth)
		default:
			return state
	}

}

export const setUserAuth = (id, login, email,isAuth) => ({
	type: SET_USER_AUTH,
	id,
	login, 
	email,
	isAuth

})

export const getUserAuth = () => {
	return (dispatch) => {
		getApi.Header()
		.then(response => {
			if(response.resultCode === 0){
			let {id, login, email} = data.data
			dispatch(setUserAuth(id, login, email, true))
			}	
		})
	}
}

export default authReduser