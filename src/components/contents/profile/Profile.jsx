import React from 'react'
import AvatarProfile from './components/avatarprofile/AvatarProfile'
import InfoProfileComponent from './components/infoprofile/InfoProfileComponent'
import PostsProfile from './components/postsprofile/PostsProfile'

const Profile = (props) => {
	
	return(
		<div className="profile">
			<AvatarProfile />
			<InfoProfileComponent />
			<PostsProfile />
		</div>
	)
	
}
export default Profile