import React from 'react'
import usersItemsComponent from './components/UsersItemsComponent'
import {followAC, nofollowAC, setUsersAC} from '../../../redux/users-reduser'
import {connect} from 'react-redux'


const mapStateToProps = (state) => ({
	users: state.users.usersArray
})

const mapDispatchToProps = (dispatch) => ({
	follow: (userId) =>{
		dispatch(followAC(userId))
	},
	nofollow: (userId) =>{
		dispatch(nofollowAC(userId))
	},
	setUsers: (users) =>{
		dispatch(setUsersAC(users))
	}
})

const Users = connect(mapStateToProps, mapDispatchToProps)(usersItemsComponent)

export default Users