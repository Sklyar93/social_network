import React from 'react'
import UserItem from './UserItem'
import * as axios from 'axios'

const UsersItemsComponent = (props) => {
	
	if(props.users.length === 0 && props.users.length < 5)
		axios
		.get('https://social-network.samuraijs.com/api/1.0/users')
		.then(response => {
			props.setUsers(response.data.items)
	})
	

	let usersItems = props.users.map(u => <UserItem key = {u.id} u = {u} followed = {props.followed} nofollowed = {props.nofollowed} />)
	return(
		<div className="users">
			{usersItems}
		</div>
	)  
}

export default UsersItemsComponent