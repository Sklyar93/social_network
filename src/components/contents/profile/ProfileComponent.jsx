import React from 'react'
import * as axios from 'axios'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {setProfile, addPost, changePost, isLoader} from '../../../redux/profile-reduser'
import Profile from './Profile'

class ProfileComponentApi extends React.Component{
	
	componentDidMount(){
		this.props.isLoader(true)
		let userId
		this.props.match.params.userId ? userId = this.props.match.params.userId : userId = 2
		axios
		.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
		.then(response => {
			this.props.setProfile(response.data, response.data.lookingForAJobDescription)
			this.props.isLoader(false)	
		})
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
const ProfileComponent =  connect(mapStateToProps,
{setProfile, addPost, changePost, isLoader})(ProfileWR)
export default ProfileComponent