import React from 'react'
import AvatarProfile from './components/AvatarProfile'
import InfoProfile from './components/InfoProfile'
import PostsProfile from './components/PostsProfile'

const Profile = (props) => {
	return(
		<div className="profile">
			<AvatarProfile />
			<InfoProfile />
			<PostsProfile addPost = {props.addPost} postsArray = {props.postsArray} newPostChange = {props.newPostChange}  newTextChage = {props.newTextChage}/>
		</div>
	)
}
export default Profile