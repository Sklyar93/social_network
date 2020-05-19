import React from 'react'
import {connect} from 'react-redux'
import Post from './Post'

const mapStateToProps = (state) => ({
	postsArray: state.profile.postsArray	
})	 

const PostsComponent = connect(mapStateToProps)(Post)

export default PostsComponent