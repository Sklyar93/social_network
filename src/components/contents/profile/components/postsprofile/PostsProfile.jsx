import React from 'react'
import AddPost from './components/addpost/AddPostComponent'
import Post from './components/post/PostComponent'

const PostsProfile = (props) => {
	let postItem = props.store.getState().profile.postsArray.map(p => <Post textPost = {p.textPost} namePost = {p.namePost} /> )
	return(
		<div className="profile__postsprofile postsprofile">
			<AddPost store = {props.store}/>
			{postItem}
		</div>
	)
}
export default PostsProfile