import React from 'react'
import ReactDom from 'react-dom'
import Header from './Header'
import {connect} from 'react-redux'
import {setUserAuth} from '../../redux/auth-reduser'
import * as axios from 'axios'
import {getApi} from '../../api/api'



class HeaderComponentApi extends React.Component{
	
	componentDidMount(){
		getApi.Header()
		.then(data => {
			let {id, login, email} = data.data
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