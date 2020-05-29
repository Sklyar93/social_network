import {combineReducers, createStore, applyMiddleware} from 'redux'
import profileReduser from './profile-reduser'
import messageReduser from './message-reduser'
import userReduser from './users-reduser'
import authReduser from './auth-reduser'
import statusReduser from './status-reduser'
import thunk from 'redux-thunk'

let redusers = combineReducers({
	messages: messageReduser,
	profile: profileReduser,
	users: userReduser,
	auth: authReduser,
	status: statusReduser
})


let store = createStore(redusers, applyMiddleware(thunk))

window.store = store
export default store