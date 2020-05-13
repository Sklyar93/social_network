import {combineReducers, createStore} from 'redux'
import profileReduser from './profile-reduser'
import messageReduser from './message-reduser'
import userReduser from './users-reduser'

let redusers = combineReducers({
	messages: messageReduser,
	profile: profileReduser,
	users: userReduser
})


let store = createStore(redusers)

window.store = store
export default store