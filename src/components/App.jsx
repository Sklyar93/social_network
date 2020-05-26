import React from 'react'
import ReactDom from 'react-dom'
import {Route, BrowserRouter} from 'react-router-dom'
import HeaderComponent from './header/HeaderComponent'
import Navbar from './navbar/Navbar'
import ProfileComponent from './contents/profile/ProfileComponent'
import MessagesComponent from './contents/message/MessagesComponent'
import Users from './contents/users/Users'
import AuthComponent from './contents/auth/AuthComponent'
import AuthNavlink from './contents/auth/AuthNavlink'
import SingIn from './contents/auth/components/SingIn'
import SingUp from './contents/auth/components/SingUp'

const App = () => {
	return(
		<div className="container">
			<HeaderComponent />
			<Navbar />
			<div className="contents">
				<Route path='/profile/:userId?' render = {() => <ProfileComponent />}/>
				<Route path='/messages' render={() => <MessagesComponent />}/>
				<Route path='/users' render={() => <Users />} />
				<Route path='/auth' render={() => <AuthComponent />} />
				<Route path='/singin' render={() => 
				<>
					<AuthNavlink />
					<SingIn />
				</>
				} />
				<Route path='/singup' render={() => 
				<>
					<AuthNavlink />
					<SingUp />
				</>
				} />
			</div>
		</div>
	)
}
export default App