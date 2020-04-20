import React from 'react'


const AddMessage = (props) => {

	let AddMess = React.createRef()

	let AddMessages = () =>{
		let NewMessage = AddMess.current.value
		console.log(NewMessage)
	}
	


	return(
		<div className="messages__add">
			<textarea ref = {AddMess} placeholder="Введите сообщение"/>
			<button onClick = {AddMessages}>Отправить сообщение</button>
		</div>
	)
}
export default AddMessage