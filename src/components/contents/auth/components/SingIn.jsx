import React from 'react'

const SingIn = (props) => {
	return (
		<div>
			<h4>Войти в профиль</h4>
			<input  placeholder = 'Введите логин' />
			<input placeholder = 'Введите пароль' />
			<div>
				<input type="checkbox" />
				<span>Запомнить меня</span>
			</div>
			<button>Войти</button>
		</div>
	)
}

export default SingIn