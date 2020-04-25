import React from 'react'
import AddPost from './post/AddPost'
import Post from './post/Post'

const PostsProfile = (props) => {
	let postItem = props.profile.postsArray.map(p => <Post textPost = {p.textPost} namePost = {p.namePost} /> )
	return(
		<div className="profile__postsprofile postsprofile">
			<AddPost dispatch = {props.dispatch} postsArray = {props.profile.postsArray} textChangePost = {props.profile.textChangePost} />
			{postItem}
		</div>
	)
}
export default PostsProfile