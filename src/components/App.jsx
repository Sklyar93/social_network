import React from 'react'
import ReactDom from 'react-dom'
import {Route, BrowserRouter} from 'react-router-dom'
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import ProfileComponent from './contents/profile/ProfileComponent'
import Messages from './contents/message/Messages'
import Users from './contents/users/Users'

const App = () => {
	return(
		<div className="container">
			<Header />
			<Navbar />
			<div className="contents">
				<Route path='/profile' render = {() => <ProfileComponent />}/>
				<Route path='/messages' render={() => <Messages />}/>
				<Route path='/users' render={() => <Users />} />
			</div>
		</div>
	)
}
export default App