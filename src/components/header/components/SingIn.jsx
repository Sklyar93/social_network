import React from 'react'
import ReactDom from 'react-dom'


const SingIn = (props) => {
	
	return(
		<div className = "header__singin">
		{props.auth.isAuth 

			? 
			<>
				<div>{props.auth.login}</div>
				<button>Выйти</button>
			</>
			
			:
			
			<>
				<button>Войти</button>
				<button>Регистрация</button>
			</>
		}
		</div>
	)
}
export default SingIn