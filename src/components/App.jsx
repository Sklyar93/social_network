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
				<Route path='/profile' render = {() => <Profile store = {props.store}/>}/>
				<Route path='/messages' render={() => <Messages store = {props.store} />}/>
			</div>
		</div>
	)
}
export default App