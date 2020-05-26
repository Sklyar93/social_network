import React from 'react'
import {compose} from 'redux'
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


const ProfileComponent = compose(connect(mapStateToProps, {getProfile}), withRouter,withAuthRedirectComponent)(ClassProfileComponent)

export default ProfileComponent