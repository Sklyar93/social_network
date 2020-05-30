import {combineReducers, createStore, applyMiddleware} from 'redux'
import profileReducer from './profile-reduсer'
import messageReducer from './message-reducer'
import userReduser from './users-reduser'
import authReduser from './auth-reduser'
import statusReduser from './status-reduser'
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
	messages: messageReducer,
	profile: profileReducer,
	users: userReduser,
	auth: authReduser,
	status: statusReduser,
	form: formReducer
})


let store = createStore(reducers, applyMiddleware(thunk))

window.store = store
export default store