import React from 'react'

const AddPost = (props) => {
	let newPost = React.createRef()
	
	let addPosts = () =>{
		props.addPost()	
	}

	let newTextChage = () =>{
		let addPost = newPost.current.value
		props.newTextChage(addPost)
	}
	
	return(
		<div className="postsprofile__addpost addpost">
			<textarea ref={newPost} onChange={newTextChage} value = {props.newPostChange} />
			<button onClick={addPosts}>Добавить запись</button>
		</div>
	)
}
export default AddPost