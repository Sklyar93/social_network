import React from 'react'
import ReactDom from 'react-dom'
import {connect} from 'react-redux'
import {getLogOut} from '../../../redux/auth-reduser'
import ButtonLogOut from './singin/ButtonLogOut'
import ButtonSingIn from './singin/ButtonSingIn'

const Singin = (props) => {
	
	const onSubmit = () => {
	debugger
		return(
			props.getLogOut()
		)
	}
	

	return(
		<div className = "header__singin">
		{props.isAuth

			? 
			<>
				<div>{props.auth.login}</div>
				<ButtonLogOut onSubmit = {onSubmit}/>
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


export default connect(mapStateToProps, {getLogOut})(Singin)