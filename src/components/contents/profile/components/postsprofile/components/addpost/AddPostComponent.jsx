import React from 'react'
import {actionCreatorAddPost, actionCreatorChangePost} from '../../../../../../../redux/profile-reduser'
import AddPost from './AddPost'

const AddPostComponent = (props) => {
	let textChangePost = props.store.getState().profile.textChangePost
	let dispatch = props.store.dispatch

	let addPost = (text) =>{
		dispatch(actionCreatorAddPost(text))	
	}

	let newTextChage = (text) =>{
		dispatch(actionCreatorChangePost(text))
	}
	
	return <AddPost textChangePost = {textChangePost} addPost = {addPost} newTextChage = {newTextChage} />
}
export default AddPostComponent