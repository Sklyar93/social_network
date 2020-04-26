import React from 'react'
import {actionCreatorAddPost, actionCreatorChangePost} from '../../../../../redux/profile-reduser'
const AddPost = (props) => {
	
	let addPost = () =>{
		props.dispatch(actionCreatorAddPost(props.textChangePost))	
	}

	let newTextChage = (e) =>{
		let textareaValue = e.target.value
		props.dispatch(actionCreatorChangePost(textareaValue))
	}
	
	return(
		<div className="postsprofile__addpost addpost">
			<textarea  onChange={newTextChage} value = {props.textChangePost}/>
			<button onClick={addPost}>Добавить запись</button>
		</div>
	)
}
export default AddPost