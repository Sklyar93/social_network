import React from 'react'
import ReactDom from 'react-dom'
import {Route, BrowserRouter} from 'react-router-dom'
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import Profile from './contents/profile/Profile'
import Messages from './contents/message/Messages'

const App = (props) => {
	return(
		<BrowserRouter>
			<div className="container">
				<Header />
				<Navbar />
				<div className="contents">
					<Route path='/profile' render = {() => <Profile />}/>
					<Route path='/messages' render={() => <Messages  messageArray = {props.messageArray} contactsArray={props.contactsArray} />}/>
				</div>
			</div>
		</BrowserRouter>
	)
}
export default App