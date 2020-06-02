import {getApi, postApi, deleteApi} from '../api/api'
import {getUserAuth} from './auth-reduser'
const SET_INIT = 'SET_INIT'

let initialState = {
	isInit: false
}

const appReducer = (state = initialState, action) => {

	const setInit = () => ({
		...state,
		isInit: true
	})

	switch(action.type) {
		case SET_INIT:
			return setInit()
		default:
			return state
	}

}

const setInit = () => ({
	type: SET_INIT
})

export const getInit = () => {
	return (dispatch) => {
		let promise = dispatch(getUserAuth())

		Promise.all([promise])
        .then(() => {
			dispatch(setInit())	
		})
	}
}



export default appReducer