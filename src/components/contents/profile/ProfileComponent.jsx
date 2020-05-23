import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getProfile} from '../../../redux/profile-reduser'
import Profile from './Profile'

class ProfileComponentApi extends React.Component{
	
	componentDidMount(){
		this.props.getProfile(this.props.match.params.userId)
	}

	render(){
		return(
			<>
				<Profile auth = {this.props.auth}/>
			</>
		)
	}
	
}

const mapStateToProps = (state) => ({
	state: state.profile,
	auth: state.auth.isAuth
})

const ProfileWR = withRouter(ProfileComponentApi)
const ProfileComponent = connect(mapStateToProps, {getProfile})(ProfileWR)
export default ProfileComponent