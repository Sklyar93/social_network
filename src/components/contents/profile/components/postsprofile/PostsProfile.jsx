import React from 'react'
import AddPost from './components/addpost/AddPostComponent'
import PostsComponent from './components/post/PostsComponent'

const PostsProfile = () => {
	return(
		<div className="profile__postsprofile postsprofile">
			<AddPost />
			<PostsComponent />
		</div>
	)
}	

export default PostsProfile