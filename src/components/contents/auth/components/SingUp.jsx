import React from 'react'

const SingUp = (props) => {
	return (
		<div>
			<form>
				<h4>Регистрация</h4>
				<input placeholder = "Придумайте логин" />
				<input placeholder = 'Введите email' />
				<input placeholder = 'Придумайте пароль' />
				<div>
					<input type="checkbox" />
					<span>Запомнить меня</span>
				</div>
				<button>Регистрация</button>
			</form>
		</div>
	)
} 

export default SingUp