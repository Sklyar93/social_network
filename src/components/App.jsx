import React from 'react'
import ReactDom from 'react-dom'
import {Route, BrowserRouter} from 'react-router-dom'
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import Profile from './contents/profile/Profile'
import Messages from './contents/message/Messages'

const App = (props) => {
	return(
		<div className="container">
			<Header />
			<Navbar />
			<div className="contents">
				<Route path='/profile' render = {() => <Profile addPost = {props.addPost} postsArray = {props.postsArray} />}/>
				<Route path='/messages' render={() => <Messages  messageArray = {props.messageArray} contactsArray={props.contactsArray} />}/>
			</div>
		</div>
	)
}
export default App