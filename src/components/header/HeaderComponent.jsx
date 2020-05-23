import React from 'react'
import ReactDom from 'react-dom'
import Header from './Header'
import {connect} from 'react-redux'
import {setUserAuth, getUserAuth} from '../../redux/auth-reduser'
import * as axios from 'axios'
import {getApi} from '../../api/api'



class HeaderComponentApi extends React.Component{
	
	componentDidMount(){
		this.props.getUserAuth()
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

const HeaderComponent = connect(mapStateToProps, {setUserAuth, getUserAuth})(HeaderComponentApi) 

export default HeaderComponent