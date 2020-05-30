import React from 'react'
import {reduxForm, Field} from 'redux-form'

const AddPost = (props) => {
	return(
		<form onSubmit = {props.handleSubmit}>
			<Field component = 'textarea' name = 'newPost'/>
			<button>Добавить запись</button>
		</form>
	)
}

const AddPostForm = reduxForm({
	form: 'post'
})(AddPost)

export default AddPostForm