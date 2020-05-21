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
			this.props.setUsers(response.data.items)
			this.props.totalUserCount(response.data.totalCount)
			this.props.isChangeLoader(false)
		})
	}

	currentPageChange = (page) => {
		this.props.isChangeLoader(true)
		this.props.currentPageChange(page)
		axios
		.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.users.pageSize}&page=${page}`)
		.then(response => {
			this.props.setUsers(response.data.items)
			this.props.isChangeLoader(false)			
		})
	}

	followed = (id) => {
		console.log(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
		this.props.followed(id)
		axios
		.post(
			`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
			{},
			{
				withCredentials: true,
				headers: {
					"API-KEY": ""
				}
			}
		)
		
	}

	nofollowed = (id) => {
		console.log(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
		this.props.nofollowed(id)
		axios
		.delete(
			`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
			{
				withCredentials: true,
				headers: {
					"API-KEY": ""
				}
			}
		)
		
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
				followed = {this.followed}
				nofollowed = {this.nofollowed}
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