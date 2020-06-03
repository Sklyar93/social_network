import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {withRouter, Redirect} from 'react-router-dom'
import {getProfile} from '../../../redux/profile-reduсer'
import {getStatus} from '../../../redux/status-reduser'
import {withAuthRedirectComponent} from '../../../hoc/AuthRedirect'
import {withLoaderRedirectProfile} from '../../../hoc/withLoaderRedirect'
import {authIdUser} from '../../../redux/selectors/auth-selectors'
import Profile from './Profile'

class ClassProfileComponent extends React.Component{
	componentDidMount(){
		let userId
		this.props.match.params.userId ? userId = this.props.match.params.userId : userId = this.props.authIdUser
		let isMe = userId === this.props.authIdUser ? true : false
		this.props.getProfile(userId, isMe)
		this.props.getStatus(userId)
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
	authIdUser: authIdUser(state)
})


const ProfileComponent = compose(connect(mapStateToProps, {getProfile, getStatus}), withRouter, withAuthRedirectComponent)(ClassProfileComponent)

export default ProfileComponent