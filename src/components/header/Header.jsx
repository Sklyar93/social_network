import React from 'react'
import ReactDom from 'react-dom'
import Logo from './components/Logo'
import Search from './components/Search'
import SingIn from './components/SingIn'

const Header = () => {
	return(
		<div>
			<Logo />
			<Search />
			<SingIn />
		</div>
	)
}
export default Header