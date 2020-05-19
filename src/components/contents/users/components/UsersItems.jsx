import React from 'react'
import {NavLink} from 'react-router-dom'
import noneAvatar from '../../../../img/grid/noneAvatar.png';
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
						{
						props.isLoader ? <Loader /> 
						: <NavLink to ={'/profile/'+u.id}>
							<img src={u.photos.small != null ? u.photos.small : noneAvatar}/>
						</NavLink>
						}
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