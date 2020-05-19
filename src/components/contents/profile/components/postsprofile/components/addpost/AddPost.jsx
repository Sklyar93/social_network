import React from 'react'

const AddPost = (props) => {
	let addPost = () =>{
		props.addPost(props.textChangePost)
	}

	let newTextChage = (e) =>{
		let textareaValue = e.target.value
		props.changePost(textareaValue)
	}
	return(
		<div className="postsprofile__addpost addpost">
			<textarea onChange={newTextChage} value = {props.textChangePost} />
			<button onClick={addPost}>Добавить запись</button>
		</div>
	)
}
export default AddPost