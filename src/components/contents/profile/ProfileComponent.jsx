import React from 'react'
import * as axios from 'axios'
import {connect} from 'react-redux'
import {setProfile, addPost, changePost, isLoader} from '../../../redux/profile-reduser'
import Profile from './Profile'

class ProfileComponentApi extends React.Component{
	
	componentDidMount(){
		this.props.isLoader(true)
		axios
		.get(`https://social-network.samuraijs.com/api/1.0/profile/3`)
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

const ProfileComponent = connect(mapStateToProps,
{setProfile, addPost, changePost, isLoader})(ProfileComponentApi)

export default ProfileComponent