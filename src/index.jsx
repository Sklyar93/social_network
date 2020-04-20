import React from 'react'
import ReactDom from 'react-dom'
import {Route, BrowserRouter} from 'react-router-dom'
import State from './redux/state'
import {addPost} from './redux/state'
import App from './components/App'
import 'normalize.css'


ReactDom.render(
	<BrowserRouter>
		<App messageArray = {State.messageArray} contactsArray={State.contactsArray} postsArray = {State.postsArray} addPost = {addPost}/>
	</BrowserRouter>,
	document.getElementById('root')

)
