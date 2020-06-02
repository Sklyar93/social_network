import React from 'react'
import ReactDom from 'react-dom'
import {connect} from 'react-redux'
import {getLogOut} from '../../../redux/auth-reduser'
import ButtonLogOut from './singin/ButtonLogOut'
import ButtonSingIn from './singin/ButtonSingIn'

const SingIn = (props) => {
	
	

	return(
		<div className = "header__singin">
		{props.isAuth

			? 
			<>
				<div>{props.auth.login}</div>
				<ButtonLogOut getLogOut = {props.getLogOut}/>
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


export default connect(mapStateToProps, {getLogOut})(SingIn)