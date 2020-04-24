import React from 'react'

const AddPost = (props) => {
	let newPost = React.createRef()
	
	let addPost = () =>{
		props.dispatch({
			type: "ADD-POST",
			addPostText: props.textchagepost
		})	
	}

	let newTextChage = () =>{
		let text = newPost.current.value
		props.dispatch({
			type: "NEW-TEXT-CHAGE", 
			textChage: text
		})
	}
	
	return(
		<div className="postsprofile__addpost addpost">
			<textarea ref={newPost} onChange={newTextChage} value = {props.textchagepost}/>
			<button onClick={addPost}>Добавить запись</button>
		</div>
	)
}
export default AddPost