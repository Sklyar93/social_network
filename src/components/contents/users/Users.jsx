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
import {getApi, postApi, deleteApi} from '../../../api/api'	
import {connect} from 'react-redux'
import * as axios from 'axios'
import UsersItems from './components/UsersItems'
import UsersPages from './components/UsersPages'


class UsersItemsApiComponent extends React.Component{
	
	componentDidMount(){
		console.log(this.props.users.pageSize)
		this.props.isChangeLoader(true)
		
		getApi.Users(this.props.users.pageSize)
		.then(data => {
			this.props.setUsers(data.items)
			this.props.totalUserCount(data.totalCount)
			this.props.isChangeLoader(false)
		}
		)
	}

	currentPageChange = (page) => {
		this.props.isChangeLoader(true)
		this.props.currentPageChange(page)
		
		getApi.Users(this.props.users.pageSize, page)
		.then(data => {
			this.props.setUsers(data.items)
			this.props.isChangeLoader(false)			
		})
	}

	followed = (id) => {
		console.log(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
		
		this.props.followed(id)
		
		postApi.Users(id)
		
	}

	nofollowed = (id) => {
		console.log(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
		this.props.nofollowed(id)
		
		deleteApi.Users(id)	
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