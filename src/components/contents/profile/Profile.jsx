import React from 'react'
import AvatarProfile from './components/avatarprofile/AvatarProfile'
import InfoProfile from './components/infoprofile/InfoProfile'
import PostsProfile from './components/postsprofile/PostsProfile'

const Profile = () => {
	return(
		<div className="profile">
			<AvatarProfile />
			<InfoProfile />
			<PostsProfile />
		</div>
	)
}
export default Profile