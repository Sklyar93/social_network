import React from 'react'
import usersItemsComponent from './components/UsersItemsComponent'
import {followedAC, nofollowedAC, setUsersAC} from '../../../redux/users-reduser'
import {connect} from 'react-redux'


const mapStateToProps = (state) => ({
	users: state.users.usersArray
})

const mapDispatchToProps = (dispatch) => ({
	followed: (userId) =>{
		dispatch(followedAC(userId))
	},
	nofollowed: (userId) =>{
		dispatch(nofollowedAC(userId))
	},
	setUsers: (users) =>{
		dispatch(setUsersAC(users))
	}
})

const Users = connect(mapStateToProps, mapDispatchToProps)(usersItemsComponent)

export default Users