import React from 'react'
import AddPost from './components/addpost/AddPostComponent'
import Post from './components/post/Post'
import MyContext from '../../../../../redux/context'

const PostsProfile = () => {
	return <MyContext.Consumer>
		{ (store) => {
			let postItem = store.getState().profile.postsArray.map(p => <Post textPost = {p.textPost} namePost = {p.namePost} /> )
			
			return(
				<div className="profile__postsprofile postsprofile">
					<AddPost />
					{postItem}
				</div>
			)
			}	
		}
	</MyContext.Consumer>
}
export default PostsProfile