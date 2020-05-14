import React from 'react'

const UserItem = (props) => {

	const follow = () =>{
		props.nofollow(props.u.id)
	}

	const nofollow = () =>{
		props.follow(props.u.id)
	}

	return(
		<div className="user">
			<div className="user__avatar">
				<img src = {props.u.avatar} />
				{props.u.follow ? <button onClick = {nofollow}>Отписаться</button> : <button onClick = {follow}>Подписаться</button>}
			</div>
			<div className="user__info">
				<h3>{props.u.name} {props.u.surname}</h3>
				<h4>Возраст: {props.u.age}</h4>
				<h4>Страна: {props.u.residence.country}</h4>
				<h4>Город: {props.u.residence.city}</h4>
			</div>
		</div>
	)
}

export default UserItem