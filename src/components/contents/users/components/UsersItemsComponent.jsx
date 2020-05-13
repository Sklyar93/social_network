import React from 'react'
import UserItem from './UserItem'

const UsersItemsComponent = (props) => {

	let usersItems = props.users.map(u => <UserItem key = {u.id} u = {u} follow = {props.follow} nofollow = {props.nofollow} />)
	return(
		<div className="users">
			{usersItems}
		</div>
	)  
}

export default UsersItemsComponent