import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {getNewPost} from '../../../../../../../redux/profile-reduсer'
import {isMeProfile} from '../../../../../../../redux/selectors/profile-selectors'
import AddPostForm from './AddPost'


const AddPostComponent = (props) => {

	const onSubmit = (data) => {
		props.getNewPost(data.newPost)
	}

	if(props.isMeProfile){
		return(
			<div className="postsprofile__addpost addpost">
				<AddPostForm onSubmit = {onSubmit} />
			</div>
		)
	}else{
		return(
			<></>
		)
	}

}


const mapStateToProps = (state) =>({
	textChangePost: state.profile.textChangePost,
	isMeProfile: isMeProfile(state)
})



export default compose(connect(mapStateToProps, {getNewPost}))(AddPostComponent)