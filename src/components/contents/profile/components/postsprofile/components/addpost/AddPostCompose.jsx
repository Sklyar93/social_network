import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {getNewPost} from '../../../../../../../redux/profile-reduсer'
import AddPostForm from './AddPost'


const AddPostComponent = (props) => {

	const onSubmit = (data) => {
		props.getNewPost(data.newPost)
	}

	return(
		<div className="postsprofile__addpost addpost">
			<AddPostForm onSubmit = {onSubmit} />
		</div>
	)
}

const mapStateToProps = (state) =>({
	textChangePost: state.profile.textChangePost
})

const AddPostCompose = compose(connect(mapStateToProps, {getNewPost}))(AddPostComponent)

export default AddPostCompose