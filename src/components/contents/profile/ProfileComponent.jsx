import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {withRouter, Redirect} from 'react-router-dom'
import {getProfile} from '../../../redux/profile-reduсer'
import {getStatus} from '../../../redux/status-reduser'
import {withAuthRedirectComponent} from '../../../hoc/AuthRedirect'
import {withLoaderRedirectProfile} from '../../../hoc/withLoaderRedirect'
import Profile from './Profile'

class ClassProfileComponent extends React.Component{
	componentDidMount(){
		let userId
		this.props.match.params.userId ? userId = this.props.match.params.userId : userId = this.props.authuserId
		
		this.props.getProfile(userId)
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
	profile: state.profile,
	authuserId: state.auth.id
})


const ProfileComponent = compose(connect(mapStateToProps, {getProfile, getStatus}), withRouter, withAuthRedirectComponent)(ClassProfileComponent)

export default ProfileComponent