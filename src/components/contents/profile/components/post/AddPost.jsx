import React from 'react'

const AddPost = (props) => {
	let newPost = React.createRef()
	
	let addPost = () =>{
		props.addPost(newPost.current.value)	
	}

	let newTextChage = () =>{
		props.newTextChage(newPost.current.value)
	}
	
	return(
		<div className="postsprofile__addpost addpost">
			<textarea ref={newPost} onChange={newTextChage} value = {props.textchagepost}/>
			<button onClick={addPost}>Добавить запись</button>
		</div>
	)
}
export default AddPost