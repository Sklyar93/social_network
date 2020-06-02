import React from 'react'


const ButtonLogOut = (props) => {

	const getLogOut = () => {
		props.getLogOut()
	}

	return(
		<button onClick = {getLogOut}>Выйти из профиля</button>
	)
}



export default ButtonLogOut