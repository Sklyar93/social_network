import React from 'react'
import AvatarProfile from './components/AvatarProfile'
import InfoProfile from './components/InfoProfile'
import PostsProfile from './components/PostsProfile'

const Profile = () => {
	return(
		<div>
			<AvatarProfile />
			<InfoProfile />
			<PostsProfile />
		</div>
	)
}
export default Profile