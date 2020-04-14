import React from 'react'
import Post from './post/Post'

const PostsProfile = () => {
	return(
		<div>
			<input type="textarea" placeholder="Что у Вас нового?" />
			<Post />
		</div>
	)
}
export default PostsProfile