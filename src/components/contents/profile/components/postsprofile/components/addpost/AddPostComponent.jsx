import React from 'react'
import {actionCreatorAddPost, actionCreatorChangePost} from '../../../../../../../redux/profile-reduser'
import MyContext from '../../../../../../../redux/context'
import AddPost from './AddPost'

const AddPostComponent = () => {

	return <MyContext.Consumer>
		{ (store) => {
			let textChangePost = store.getState().profile.textChangePost
			let dispatch = store.dispatch

			let addPost = (text) =>{
				dispatch(actionCreatorAddPost(text))	
			}

			let newTextChage = (text) =>{
				dispatch(actionCreatorChangePost(text))
			}
			return <AddPost textChangePost = {textChangePost} addPost = {addPost} newTextChage = {newTextChage} />
		}
		}
	</MyContext.Consumer>
}
export default AddPostComponent