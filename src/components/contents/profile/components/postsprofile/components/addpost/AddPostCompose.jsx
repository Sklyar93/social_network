import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {getNewPost} from '../../../../../../../redux/profile-reduсer'
import {isMeProfile} from '../../../../../../../redux/selectors/profile-selectors'
import AddPostForm from './AddPost'


class AddPostComponent extends React.Component{

	onSubmit = (data) => {
		this.props.getNewPost(data.newPost)
	}
	render(){
		if(this.props.isMeProfile){
			return(
				<div className="postsprofile__addpost addpost">
					<AddPostForm onSubmit = {this.onSubmit} />
				</div>
			)
		}else{
			return(
				<></>
			)
		}
	}
}

const mapStateToProps = (state) =>({
	textChangePost: state.profile.textChangePost,
	isMeProfile: isMeProfile(state)
})

const AddPostCompose = compose(connect(mapStateToProps, {getNewPost}))(AddPostComponent)

export default AddPostCompose