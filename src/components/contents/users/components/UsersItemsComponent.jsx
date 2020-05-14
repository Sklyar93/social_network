import React from 'react'
import UserItem from './UserItem'

const UsersItemsComponent = (props) => {

	if (props.users.length === 0) {
        props.setUsers([
        	{id: 1, follow: true, name: 'Valera', surname: 'Sklyar', age: '26', avatar: 'src/Avatar/valera.jpeg', residence: {
			country: 'Russia', city: 'Krasnodar'
			}},
			{id: 2, follow: false, name: 'Tanya', surname: 'Sinchenko', age: '24', avatar: 'src/Avatar/tanya.jpeg', residence: {
				country: 'Russia', city: 'Krasnodar'
			}},
			{id: 3, follow: false, name: 'Bean', surname: '', age: '46', avatar: 'src/Avatar/bean.jpeg', residence: {
				country: 'UK', city: 'London'
			}
			}
        ])
    }

	let usersItems = props.users.map(u => <UserItem key = {u.id} u = {u} follow = {props.follow} nofollow = {props.nofollow} setUsers = {props.setUsers} />)
	return(
		<div className="users">
			{usersItems}
		</div>
	)  
}

export default UsersItemsComponent