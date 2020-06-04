import React from 'react'
import ReactDom from 'react-dom'
import {connect} from 'react-redux'
import {getLogOut} from '../../../redux/auth-reduser'
import ButtonLogOut from './singin/ButtonLogOut'
import ButtonSingIn from './singin/ButtonSingIn'
import {BtnDisabled, isAuth} from '../../../redux/selectors/auth-selectors'

const SingIn = (props) => {
	
	

	return(
		<div className = "header__singin">
		{props.isAuth

			? 
			<>
				<div>{props.auth.login}</div>
				<ButtonLogOut getLogOut = {props.getLogOut} BtnDisabled = {props.BtnDisabled}/>
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
	isAuth: isAuth(state),
	BtnDisabled: BtnDisabled(state)
})


export default connect(mapStateToProps, {getLogOut})(SingIn)