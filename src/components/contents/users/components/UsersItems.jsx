import React from 'react'
import {NavLink} from 'react-router-dom'
import noneAvatar from '../../../../img/grid/noneAvatar.png';
import Loader from '../../../grid/loader/Loader'

class UsersItems extends React.Component{

	followed = (id) =>{
		return this.props.followed(id)
	}

	nofollowed = (id) =>{
		this.props.nofollowed(id)
	}

	followDisabledSelector = (uid) => {
		return this.props.followDisabledSelector.some(id => id === uid)
	}



	render(){
	console.log('UsersItems')
		return(
			<>
				{this.props.usersArray.map(u => 
					<div className="user">
						<div className="user__avatar">
							{
							this.props.isLoader ? <Loader /> 
							: <NavLink to ={'/profile/'+u.id}>
								<img src={u.photos.small != null ? u.photos.small : noneAvatar}/>
							</NavLink>
							}
							{this.props.isAuth && (u.followed ? <button disabled = {this.followDisabledSelector(u.id)}  onClick = {() => {this.nofollowed(u.id)}}>Отписаться</button> : <button disabled = {this.followDisabledSelector(u.id)} onClick = {() => {this.followed(u.id)}}>Подписаться</button>)}
						</div>
						<div className="user__info">
							<h3>{u.name}</h3>
							<h3>Статус: {u.status}</h3>
						</div>
					</div>
				)}
			</>
		)
	}
}

export default UsersItems