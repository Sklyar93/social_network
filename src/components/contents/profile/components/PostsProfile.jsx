import React from 'react'
import AddPost from './post/AddPost'
import Post from './post/Post'

const PostsProfile = () => {
	return(
		<div className="profile__postsprofile postsprofile">
			<AddPost />
			<Post />
		</div>
	)
}
export default PostsProfile