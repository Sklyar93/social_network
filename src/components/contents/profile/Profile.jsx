import React from 'react'
import {Redirect} from 'react-router-dom'
import AvatarProfile from './components/avatarprofile/AvatarProfile'
import InfoProfile from './components/infoprofile/InfoProfile'
import PostsProfile from './components/postsprofile/PostsProfile'

const Profile = (props) => {

	console.log(props.auth)
	if(props.auth){
	return(
		
		<div className="profile">
			<AvatarProfile />
			<InfoProfile />
			<PostsProfile />
		</div>
		
	)
	}else{
		return <Redirect to= '/auth' />
	}
}
export default Profile