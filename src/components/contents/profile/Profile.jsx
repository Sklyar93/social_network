import React from 'react'
import AvatarProfile from './components/AvatarProfile'
import InfoProfile from './components/InfoProfile'
import PostsProfile from './components/PostsProfile'

const Profile = (props) => {
	return(
		<div className="profile">
			<AvatarProfile />
			<InfoProfile />
			<PostsProfile  profile = {props.profile}  dispatch = {props.dispatch}/>
		</div>
	)
}
export default Profile