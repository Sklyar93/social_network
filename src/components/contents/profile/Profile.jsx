import React from 'react'
import AvatarProfile from './components/avatarprofile/AvatarProfile'
import InfoProfileCompose from './components/infoprofile/InfoProfileCompose'
import PostsProfile from './components/postsprofile/PostsProfile'

const Profile = (props) => {
	
	return(
		<div className="profile">
			<AvatarProfile />
			<InfoProfileCompose />
			<PostsProfile />
		</div>
	)
	
}
export default Profile