import React from 'react'
import {connect} from 'react-redux'
import {actionCreatorAddPost, actionCreatorChangePost} from '../../../../../../../redux/profile-reduser'
import AddPost from './AddPost'

const mapStateToProps = (state) =>({
	textChangePost: state.profile.textChangePost
})

const mapDispatchToProps = (dispatch) =>({
	addPost: (text) => {
		dispatch(actionCreatorAddPost(text))	
	},
	newTextChage: (text) => {
		dispatch(actionCreatorChangePost(text))		
	}
})

const AddPostComponent = connect(mapStateToProps,mapDispatchToProps)(AddPost)

export default AddPostComponent