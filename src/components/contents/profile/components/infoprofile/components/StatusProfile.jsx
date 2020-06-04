import React, {useState, useEffect}from 'react'

const  StatusProfile = (props) =>  {
	
    let[editMode, setEditMode] = useState(true)
    let[status, setStatus] = useState(props.status)

    const statusInfo = () => {
    	setEditMode(false)
    }

    const updatesStatus = () => {
    	setEditMode(true)
    }

    const onStatusChange = (e) => {
    	setStatus(e.currentTarget.value)
    }

    useEffect(() => {
    	setStatus(props.status)
    },[props.status])

	if(editMode){
	return(
		<>
			<h4>Статус: {status}</h4>
			{props.isMeProfile && <button onClick = {statusInfo}>Изменить статус</button>}
		</>
	)
	}else{
	return(
		<>
			<input autoFocus = {true} onChange = {onStatusChange}  value = {status} />
			{props.isMeProfile && <button onClick = {updatesStatus}>Добавить статус</button>}
			
		</>
	)
	}
	
}
export default StatusProfile