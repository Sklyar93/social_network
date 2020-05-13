import React from 'react'
import ReactDom from 'react-dom'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
	return(
		<div className="navbar">
			<ul>
				<li><NavLink to="/profile">Профиль</NavLink></li>
				<li><NavLink to="/messages">Сообщения</NavLink></li>
				<li><NavLink to="/users">Люди</NavLink></li>
				<li><NavLink to="/music">Музыка</NavLink></li>
				<li><NavLink to="/video">Видео</NavLink></li>
				<li><NavLink to="/setting">Настройки</NavLink></li>
			</ul>
		</div>
	)
}
export default Navbar