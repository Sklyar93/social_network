import React from 'react'
import {connect} from 'react-redux'
import PostComponent from './components/PostComponent'

 
const mapStateToProps = (state) => ({
	postsArray: state.profile.postsArray	
})	 

const PostsComponent = connect(mapStateToProps)(PostComponent)
export default PostsComponent