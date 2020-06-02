import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {maxLength, Input} from '../../../../../../../utils/validation/form/validations'

let maxlength = maxLength(300)
const AddPost = (props) => {
	const{handleSubmit, pristine, reset, submitting} = props
	return(
		<form onSubmit = {props.handleSubmit}>
			<Field component = {Input} validate = {[maxlength]} name = 'newPost'/>
			<button disabled = {pristine || submitting}>Добавить запись</button>
		</form>
	)
}

const AddPostForm = reduxForm({
	form: 'post'
})(AddPost)

export default AddPostForm