import React from 'react'
import AddPost from './post/AddPost'
import Post from './post/Post'

const PostsProfile = (props) => {
	let postItem = props.postsArray.map(p => <Post  textPost = {p.textPost} namePost = {p.namePost} /> )
	return(
		<div className="profile__postsprofile postsprofile">
			<AddPost addPost = {props.addPost}/>
			{postItem}
		</div>
	)
}
export default PostsProfile