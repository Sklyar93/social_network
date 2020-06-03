import React from 'react'
import {NavLink} from 'react-router-dom'
import noneAvatar from '../../../../img/grid/noneAvatar.png';
import Loader from '../../../grid/loader/Loader'

const UsersItems = (props) => {

	const followed = (id) =>{
		return props.followed(id)
		console.log(props.followDisabledSelector)
	}

	const nofollowed = (id) =>{
		props.nofollowed(id)
		console.log(props.followDisabledSelector)
	}

	const followDisabledSelector = (uid) => {
		return props.followDisabledSelector.some(id => id === uid)
	}

	return(
		<>
			{props.usersArray.map(u => 
				<div className="user">
					<div className="user__avatar">
						{
						props.isLoader ? <Loader /> 
						: <NavLink to ={'/profile/'+u.id}>
							<img src={u.photos.small != null ? u.photos.small : noneAvatar}/>
						</NavLink>
						}
						{props.isAuth && (u.followed ? <button disabled = {followDisabledSelector(u.id)}  onClick = {() => {nofollowed(u.id)}}>Отписаться</button> : <button disabled = {followDisabledSelector(u.id)} onClick = {() => {followed(u.id)}}>Подписаться</button>)}
					</div>
					<div className="user__info">
						<h3>{u.name}</h3>
						<h3>Статус: {u.status}</h3>
					</div>
				</div>
			)}
		</>
	)
}

export default UsersItems