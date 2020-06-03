import React from 'react'
import StatusProfile from './components/StatusProfile'


const InfoProfile = (props) => {

	return(
		<div className = "profile__infoprofile">
			<h3>Информация о профиле</h3>
			<h4>Логин пользователя {props.profile.profileArray.map(p => p.fullName)}</h4>
			<h4>id пользователя {props.profile.profileArray.map(p => p.userId)}</h4>
			<StatusProfile isMeProfile = {props.isMeProfile} status = {props.status} updatesStatus = {props.updatesStatus} />
		</div>
	)
}
export default InfoProfile