import {getApi, postApi, deleteApi} from '../api/api'
import {stopSubmit} from 'redux-form'
const SET_USER_AUTH = 'SET_USER_AUTH'
const SET_DISABLED_BUTTON = 'SET_DISABLED_BUTTON'

let  initialState = {
	id: null,
	login: null, 
	email: null,
	isAuth: false,
	BtnDisabled: false
}



const authReduser = (state = initialState, action) => {

	const setUserAuth = (id, login, email, isAuth) => ({
		...state,
			id: action.id,
			login: action.login, 
			email: action.email,
			isAuth: action.isAuth
	})


	const setDisabledButton = (btn) => ({
		...state,
		BtnDisabled: action.btn
	})


	switch(action.type) {
		case SET_USER_AUTH :
			return setUserAuth(action.id, action.login, action.email, action.isAuth)
		case SET_DISABLED_BUTTON :
			return setDisabledButton(action.btn)
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

const setDisabledButton = (btn) => ({
	type: SET_DISABLED_BUTTON,
	btn
})

export const getUserAuth = () => {
	return (dispatch) => {
		return getApi
		.Header()
		.then((data) => {
			console.log(data)
			if(data.resultCode === 0){
			let {id, login, email} = data.data
			dispatch(setUserAuth(id, login, email, true))
			}else{
				dispatch(setUserAuth(null, null, null, false))
			}	
		})
	}
}

export 	const singInAuth = (email, password, rememberMe = false, captcha = true) => {
	
	return (dispatch) => {
		dispatch(setDisabledButton(true))
		postApi
		.SingIn(email, password, rememberMe, captcha)
		.then(response => {
			if(response.data.resultCode === 0){
				dispatch(getUserAuth())
			}else{
				let messageError = response.data.messages.length > 0 ? response.data.messages[0] : 'Ошибка' 
				dispatch(stopSubmit("singIn", {_error: messageError}))				
			}
			dispatch(setDisabledButton(false))	
		})
	}
}
deleteApi

export const getLogOut = () =>{
	return (dispatch) =>{
		dispatch(setDisabledButton(true))
		deleteApi
		.LogOut()
		.then((response) => {
			if(response.data.resultCode === 0){
				dispatch(setUserAuth(null, null, null, false))
			}
			dispatch(setDisabledButton(false))	
		})
	}
}

export default authReduser