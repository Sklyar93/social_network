import React from 'react'
import {
			followed, 
			nofollowed, 
			setUsers, 
			currentPageChange, 
			totalUserCount, 
			currentPageMinys, 
			currentPagePlus, 
			isChangeLoader,
			followDisabled
		} 
	from '../../../redux/users-reduser'
import {getApi, postApi, deleteApi} from '../../../api/api'	
import {connect} from 'react-redux'
import * as axios from 'axios'
import UsersItems from './components/UsersItems'
import UsersPages from './components/UsersPages'


class UsersItemsApiComponent extends React.Component{
	
	componentDidMount(){
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
		this.props.followDisabled(id, true)
		postApi.Users(id)
		.then(response => {
		console.log(response)
            if (response.data.resultCode == 0) {
                this.props.followed(id) 
            }
            this.props.followDisabled(id, false)
        })
		
	}

	nofollowed = (id) => {
		this.props.followDisabled(id, true)
		deleteApi.Users(id)
		.then(response => {
            if (response.data.resultCode == 0) {
                this.props.nofollowed(id) 
            }
            this.props.followDisabled(id, false)
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
	isChangeLoader,
	followDisabled
}
)(UsersItemsApiComponent)

export default Users