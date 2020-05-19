import React from 'react'
import {
			followed, 
			nofollowed, 
			setUsers, 
			currentPageChange, 
			totalUserCount, 
			currentPageMinys, 
			currentPagePlus, 
			isChangeLoader
		} 
	from '../../../redux/users-reduser'
import {connect} from 'react-redux'
import * as axios from 'axios'
import UsersItems from './components/UsersItems'
import UsersPages from './components/UsersPages'


class UsersItemsApiComponent extends React.Component{
	
	componentDidMount(){
		this.props.isChangeLoader(true)
		axios
		.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.users.pageSize}`)
		.then(response => {
			this.props.isChangeLoader(false)
			this.props.setUsers(response.data.items)
			this.props.totalUserCount(response.data.totalCount)
		})
	}

	currentPageChange = (page) => {
		this.props.isChangeLoader(true)
		this.props.currentPageChange(page)
		axios
		.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.users.pageSize}&page=${page}`)
		.then(response => {
			this.props.isChangeLoader(false)
			this.props.setUsers(response.data.items)			
		})
	}

	render(){
		return(
		<div className="users">
			<UsersPages 
				users = {this.props.users} 
				currentPageChange = {this.currentPageChange}
				totalUserCount = {this.props.totalUserCount} 
				currentPageMinys = {this.props.currentPageMinys}
				currentPagePlus = {this.props.currentPagePlus}
			/>
			<UsersItems 
				users = {this.props.users} 
				followed = {this.props.followed}
				nofollowed = {this.props.nofollowed}
				isLoader = {this.props.users.isLoader}
			/>
		</div>
		)
	}	 
}

const mapStateToProps = (state) => ({
	users: state.users
})

const Users = connect(mapStateToProps, 
{
	followed, 
	nofollowed, 
	setUsers, 
	currentPageChange, 
	totalUserCount, 
	currentPageMinys, 
	currentPagePlus, 
	isChangeLoader
}
)(UsersItemsApiComponent)

export default Users