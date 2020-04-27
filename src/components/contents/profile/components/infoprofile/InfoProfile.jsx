import React from 'react'

const InfoProfile = (props) => {
	return(
		<div className ="profile__infoprofile">
			<h3>Информация о профиле</h3>
			<h4>Фамилия {props.surname}</h4>
			<h4>Имя {props.name}</h4>
			<h4>Отчество</h4>
			<h4>Возраст</h4>
			<h4>Город</h4>
			<h4>Подробная информация</h4>
		</div>
	)
}
export default InfoProfile