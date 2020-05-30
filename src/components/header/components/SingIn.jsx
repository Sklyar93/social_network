import React from 'react'
import ReactDom from 'react-dom'
import {getLogOut} from 
import ButtonLogOut from './singin/ButtonLogOut'
import ButtonSingIn from './singin/ButtonSingIn'

const SingIn = (props) => {
	
	return(
		<div className = "header__singin">
		{props.isAuth

			? 
			<>
				<div>{props.auth.login}</div>
				<ButtonLogOut />
			</>
			
			:
			
			<>
				<ButtonSingIn />
			</>
		}
		</div>
	)
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

connect(mapStateToProps, {getLogOut})(SingIn)

export default SingIn