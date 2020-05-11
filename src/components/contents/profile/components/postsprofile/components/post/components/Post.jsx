import React from 'react'

const Post = (props) => {
	return(
		<div>
			<h3>{props.namePost}</h3>
			<p>{props.textPost}</p>
		</div>
	)
}
export default Post