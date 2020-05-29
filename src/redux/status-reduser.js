import {getApi, putApi} from '../api/api'
const SET_STATUS = 'SET_STATUS'



const initialState = {
	status: undefined
}

 const statusReduser = (state = initialState, action) => {
	
	const setStatus = (status) => ({
		...state,
		status: action.status	
	})

	switch(action.type){
		case SET_STATUS:
			return setStatus(action.status)
		default:
			return state
	}
		
}

const setStatus = (status) => ({
	type: SET_STATUS,
	status	
})




export const getStatus = (id) => {
	return (dispatch) => {
		getApi.Status(id)
		.then((data) => {
			dispatch(setStatus(data))
		})
	}
} 

export const updatesStatus = (status) => {
	return (dispatch) => {
		putApi.Status(status)
		.then((response) => {
			console.log(response.data.resultCode)
			if(response.data.resultCode === 0){
				dispatch(setStatus(status))
			}
		})
	}
}

export default statusReduser