import React from 'react'
import * as axios from 'axios'
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
				<Profile />
			</>
		)
	}
	
}

const mapStateToProps = (state) => ({
	state: state.profile
})

const ProfileWR = withRouter(ProfileComponentApi)
const ProfileComponent = connect(mapStateToProps, {getProfile})(ProfileWR)
export default ProfileComponent