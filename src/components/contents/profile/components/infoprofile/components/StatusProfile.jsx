import React from 'react'

class StatusProfile extends React.Component{
	state = {
		editMode: true,
		status: this.props.status
	}

	statusInfo = () =>{
		this.setState({
			editMode: false
		})
	}


	updatesStatus = () => {
		this.props.updatesStatus(this.state.status)
		this.setState({
			editMode: true
		})
	}

	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value
		})
	}

	componentDidUpdate(prevProps, prevState) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }

        console.log("componentDidUpdate")
    }

	render(){
		if(this.state.editMode){
		return(
			<>
				<h4>Статус: {this.state.status}</h4>
				<button onClick = {this.statusInfo}>Изменить статус</button>
			</>
		)
		}else{
		return(
			<>
				<input autoFocus = {true} onChange = {this.onStatusChange}  value = {this.state.status} />
				<button onClick = {this.updatesStatus}>Добавить статус</button>
			</>
		)
		}
	}
	
}
export default StatusProfile