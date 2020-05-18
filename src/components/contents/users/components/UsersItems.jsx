import React from 'react'
import userPhoto from '../../../../Avatar/bean.jpeg';
import Loader from '../../../grid/loader/Loader'

const UsersItems = (props) => {

	const followed = (id) =>{
		console.log(id)
		return props.nofollowed(id)
	}

	const nofollowed = (id) =>{
		props.followed(id)
	}
	
	return(
		<>
			{props.users.usersArray.map(u => 
				<div className="user">
					<div className="user__avatar">
						{props.isLoader ? <Loader /> : <img src={u.photos.small != null ? u.photos.small : userPhoto}/>}
						{u.followed ? <button onClick = {() => {nofollowed(u.id)}}>Отписаться</button> : <button onClick = {() => {followed(u.id)}}>Подписаться</button>}
					</div>
					<div className="user__info">
						<h3>{u.name}</h3>
						<h4>Возраст:</h4>
						<h4>Страна: </h4>
						<h4>Город: </h4>
					</div>
				</div>
			)}
		</>
	)
}

export default UsersItems