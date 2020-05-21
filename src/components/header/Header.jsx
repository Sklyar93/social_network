import React from 'react'
import ReactDom from 'react-dom'
import Logo from './components/Logo'
import Search from './components/Search'
import SingIn from './components/SingIn'


const Header = (props) => {
	return(
		<header className="header">
			<Logo />
			<Search />
			<SingIn auth = {props}/>
		</header>
	)
}
export default Header