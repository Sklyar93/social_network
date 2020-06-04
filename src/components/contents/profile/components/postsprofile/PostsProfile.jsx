import React from 'react'
import AddPostComponent from './components/addpost/AddPostComponent'
import PostsComponent from './components/post/PostsComponent'

const PostsProfile = () => {
	return(
		<div className="profile__postsprofile postsprofile">
			<AddPostComponent />
			<PostsComponent />
		</div>
	)
}	

export default PostsProfile