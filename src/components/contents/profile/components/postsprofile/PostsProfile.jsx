import React from 'react'
import AddPostCompose from './components/addpost/AddPostCompose'
import PostsComponent from './components/post/PostsComponent'

const PostsProfile = () => {
	return(
		<div className="profile__postsprofile postsprofile">
			<AddPostCompose />
			<PostsComponent />
		</div>
	)
}	

export default PostsProfile