import React from 'react'

const AddPost = () => {
	return(
		<div className="postsprofile__addpost addpost">
			<input type="textarea" placeholder="Что у Вас нового?" />
			<button>Добавить запись</button>
		</div>
	)
}
export default AddPost