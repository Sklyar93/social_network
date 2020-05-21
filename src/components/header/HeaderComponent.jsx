import React from 'react'
import ReactDom from 'react-dom'
import Header from './Header'
import {connect} from 'react-redux'
import {setUserAuth} from '../../redux/auth-reduser'
import * as axios from 'axios'



class HeaderComponentApi extends React.Component{
	
	componentDidMount(){
		axios
		.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, 
			{
				withCredentials: true
			}
		)
		.then(response => {
			let {id, login, email} = response.data.data
			this.props.setUserAuth(id, login, email, true)	
		})
	}

	render(){
		return(
			<>
				<Header {...this.props.auth} />
			</>
		)
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth
})

const HeaderComponent = connect(mapStateToProps, {setUserAuth})(HeaderComponentApi) 

export default HeaderComponent