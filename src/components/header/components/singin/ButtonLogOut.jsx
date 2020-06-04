import React from 'react'


const ButtonLogOut = (props) => {

	const getLogOut = () => {
		props.getLogOut()
	}

	return(
		<button  disabled = {props.BtnDisabled} onClick = {getLogOut}>Выйти из профиля</button>
	)
}



export default ButtonLogOut