import React from 'react'
import {connect} from 'react-redux'
import {addPost, changePost} from '../../../../../../../redux/profile-reduser'
import AddPost from './AddPost'

const mapStateToProps = (state) =>({
	textChangePost: state.profile.textChangePost
})

const AddPostComponent = connect(mapStateToProps, {addPost, changePost})(AddPost)

export default AddPostComponent