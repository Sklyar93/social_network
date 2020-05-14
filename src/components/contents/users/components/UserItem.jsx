import React from 'react'
import userPhoto from '../../../../Avatar/bean.jpeg';

const UserItem = (props) => {

	const followed = () =>{
		props.nofollowed(props.u.id)
	}

	const nofollowed = () =>{
		props.followed(props.u.id)
	}
	console.log(props.u.photos.small)
	return(
		<div className="user">
			<div className="user__avatar">
				<img src={props.u.photos.small != null ? props.u.photos.small : userPhoto}/>
				{props.u.followed ? <button onClick = {nofollowed}>Отписаться</button> : <button onClick = {followed}>Подписаться</button>}
			</div>
			<div className="user__info">
				<h3>{props.u.name}</h3>
				<h4>Возраст:</h4>
				<h4>Страна: </h4>
				<h4>Город: </h4>
			</div>
		</div>
	)
}

export default UserItem