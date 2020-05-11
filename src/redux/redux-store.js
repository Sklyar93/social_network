import {combineReducers, createStore} from 'redux'
import profileReduser from './profile-reduser'
import messageReduser from './message-reduser'

let redusers = combineReducers({
	messages: messageReduser,
	profile: profileReduser
})


let store = createStore(redusers)

window.store = store
export default store