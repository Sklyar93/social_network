import React from 'react'

const SingUp = (props) => {
	return (
		<div>
			<h4>Регистрация</h4>
			<input placeholder = "Придумайте логин" />
			<input placeholder = 'Введите email' />
			<input placeholder = 'Введите пароль' />
			<div>
				<input type="checkbox" />
				<span>Запомнить меня</span>
			</div>
			<button>Регистрация</button>
		</div>
	)
} 

export default SingUp