import React from 'react'
import ReactDom from 'react-dom'
import {Route, BrowserRouter} from 'react-router-dom'
import State from './redux/state'
import {addPost, newTextChage, subscribe} from './redux/state'
import App from './components/App'
import 'normalize.css'


const renderEntireTree = () =>{
ReactDom.render(
	<BrowserRouter>
		<App messageArray = {State.messageArray} contactsArray={State.contactsArray} postsArray = {State.Profile.postsArray} newPostChange = {State.Profile.newPostChange} addPost = {addPost} newTextChage = {newTextChage} />
	</BrowserRouter>,
	document.getElementById('root')

)
}

renderEntireTree()

subscribe(renderEntireTree)