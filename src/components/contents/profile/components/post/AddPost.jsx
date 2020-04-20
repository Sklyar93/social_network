import React from 'react'

const AddPost = (props) => {
	let newPost = React.createRef()
	let addPosts = () =>{
		let addPost = newPost.current.value
		props.addPost(addPost)
		debugger
		newPost.current.value = ''
		
	}
	
	return(
		<div className="postsprofile__addpost addpost">
			<input ref={newPost} type="textarea" placeholder="Что у Вас нового?" />
			<button onClick={addPosts}>Добавить запись</button>
		</div>
	)
}
export default AddPost