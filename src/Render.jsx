import React from 'react'
import ReactDom from 'react-dom'
import {Route, BrowserRouter} from 'react-router-dom'
import {addPost} from './redux/state'
import {newTextChage} from './redux/state'
import App from './components/App'
import 'normalize.css'

export const renderEntireTree = (State) =>{
ReactDom.render(
	<BrowserRouter>
		<App messageArray = {State.messageArray} contactsArray={State.contactsArray} postsArray = {State.Profile.postsArray} newPostChange = {State.Profile.newPostChange} addPost = {addPost} newTextChage = {newTextChage} />
	</BrowserRouter>,
	document.getElementById('root')

)
}