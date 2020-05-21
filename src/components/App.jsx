import React from 'react'
import ReactDom from 'react-dom'
import {Route, BrowserRouter} from 'react-router-dom'
import HeaderComponent from './header/HeaderComponent'
import Navbar from './navbar/Navbar'
import ProfileComponent from './contents/profile/ProfileComponent'
import Messages from './contents/message/Messages'
import Users from './contents/users/Users'

const App = () => {
	return(
		<div className="container">
			<HeaderComponent />
			<Navbar />
			<div className="contents">
				<Route path='/profile/:userId?' render = {() => <ProfileComponent />}/>
				<Route path='/messages' render={() => <Messages />}/>
				<Route path='/users' render={() => <Users />} />
			</div>
		</div>
	)
}
export default App