import React from 'react'
import ReactDom from 'react-dom'
import {Route, BrowserRouter, withRouter} from 'react-router-dom'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {getInit} from '../redux/app-reducer'
import HeaderComponent from './header/HeaderComponent'
import Navbar from './navbar/Navbar'
import ProfileComponent from './contents/profile/ProfileComponent'
import MessagesComponent from './contents/message/MessagesComponent'
import Users from './contents/users/Users'
import AuthComponent from './contents/auth/AuthComponent'
import AuthNavlink from './contents/auth/AuthNavlink'
import SingIn from './contents/auth/components/SingIn'
import SingUp from './contents/auth/components/SingUp'
import Loader from '../components/grid/loader/Loader'


class App extends React.Component{
	
	componentDidMount(){
		this.props.getInit()
	}

	render(){
		if(!this.props.isInit){
			return <Loader />
		}

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
}

const mapStateToProps = (state) => ({
	isInit: state.app.isInit	
})



export default compose(
connect(mapStateToProps, {getInit}), withRouter
)(App)