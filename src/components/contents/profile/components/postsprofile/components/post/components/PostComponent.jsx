import React from 'react'
import Post from './Post'

const PostComponent = (props) => {
	let postsItems = props.postsArray.map(p => <Post key ={p.id} namePost = {p.namePost} textPost = {p.textPost} />)

	return(
		<div className="postsprofile__post post">
			{postsItems}
		</div>
	)
}
export default PostComponent