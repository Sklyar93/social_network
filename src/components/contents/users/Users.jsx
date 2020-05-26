import React from 'react'
import { 
			currentPageChange, 
			totalUserCount, 
			currentPageMinys, 
			currentPagePlus, 
			isChangeLoader,
			followDisabled,
			getUsers,
			getFollow,
			getNoFollow
		} 
	from '../../../redux/users-reduser'
import {connect} from 'react-redux'
import {withAuthRedirectComponent} from '../../../hoc/AuthRedirect'
import UsersItems from './components/UsersItems'
import UsersPages from './components/UsersPages'


class UsersItemsApiComponent extends React.Component{
	
	componentDidMount(){
		this.props.getUsers(this.props.users.pageSize, 1)
	}

	currentPageChange = (page) => {
		this.props.getUsers(this.props.users.pageSize, page)
	}

	followed = (id) => {
		this.props.getFollow(id)	
	}

	nofollowed = (id) => {
		this.props.getNoFollow(id)
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

const withAuthRedirect = withAuthRedirectComponent(UsersItemsApiComponent)

const Users = connect(mapStateToProps, 
{
	currentPageChange, 
	totalUserCount, 
	currentPageMinys, 
	currentPagePlus, 
	isChangeLoader,
	followDisabled,
	getUsers,
	getFollow,
	getNoFollow
}
)(withAuthRedirect)

export default Users