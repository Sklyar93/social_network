import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Redirect} from 'react-router-dom'
import {getProfile} from '../../../redux/profile-reduser'
import {withAuthRedirectComponent} from '../../../hoc/AuthRedirect'
import Profile from './Profile'

class ClassProfileComponent extends React.Component{
	componentDidMount(){
		let userId
		this.props.match.params.userId ? userId = this.props.match.params.userId : userId = 2 
		console.log(userId)
		this.props.getProfile(userId)
	}

	render(){
		return(
			<>
				<Profile />
			</>
		)
	}
	
}

const mapStateToProps = (state) => ({
	profile: state.profile
})

let AuthRedirectComponent = withAuthRedirectComponent(ClassProfileComponent)

const ProfileWR = withRouter(AuthRedirectComponent)

const ProfileComponent = connect(mapStateToProps, {getProfile})(ProfileWR)

export default ProfileComponent