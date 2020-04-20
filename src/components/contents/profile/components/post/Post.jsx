import React from 'react'

const Post = (props) => {
	return(
			<div className="postsprofile__post post">
				<h4>{props.namePost}</h4>
				<p>{props.textPost}</p>
				<h5>Дата публикации: </h5>
			</div>
	)
}
export default Post