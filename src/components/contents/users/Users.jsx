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
import {compose} from 'redux'	
import {connect} from 'react-redux'
import {selectorStatusUsers, isLoaderUsers , currentPageUsers, totalCountUsers, usersArray, 
pageSize, followDisabledSelector} from '../../../redux/selectors/users-selectors'
import {isAuth} from '../../../redux/selectors/auth-selectors'
import {withAuthRedirectComponent} from '../../../hoc/AuthRedirect'
import UsersItems from './components/UsersItems'
import UsersPages from './components/UsersPages'


class UsersItemsApiComponent extends React.Component{
	
	componentDidMount(){
		this.props.getUsers(this.props.pageSize, 1)
	}
	
	currentPageChange = (page) => {
		this.props.getUsers(this.props.pageSize, page)
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
				pageSize = {this.props.pageSize}
				currentPage = {this.props.currentPage}
				totalCount = {this.props.totalCount}
				currentPageChange = {this.currentPageChange}
				totalUserCount = {this.props.totalUserCount} 
				currentPageMinys = {this.props.currentPageMinys}
				currentPagePlus = {this.props.currentPagePlus}
			/>
			<UsersItems 
				followDisabledSelector = {this.props.followDisabledSelector}
				usersArray = {this.props.usersArray}
				isLoader = {this.props.isLoader}
				status = {this.props.status}
				followed = {this.followed}
				nofollowed = {this.nofollowed}
				isAuth = {this.props.isAuth}
			/>
		</div>
		)
	}	 
}

const mapStateToProps = (state) => ({
	followDisabledSelector: followDisabledSelector(state),
	pageSize: pageSize(state),
	currentPage: currentPageUsers(state),
	totalCount: totalCountUsers(state),
	isLoader: isLoaderUsers(state),
	usersArray: usersArray(state),
	status: selectorStatusUsers(state),
	isAuth: isAuth(state) 
})


const Users = compose(connect(mapStateToProps, 
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
}))(UsersItemsApiComponent)

export default Users