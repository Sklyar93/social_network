import React from 'react'

const Post = (props) => {
	
	return(
		<div className="postsprofile__post post">
			{props.postsArray.map(p => <h4>Пост: {p.text}</h4> )}
		</div>
	)
}
export default Post