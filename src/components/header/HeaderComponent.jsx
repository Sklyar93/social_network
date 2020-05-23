import React from 'react'
import ReactDom from 'react-dom'
import Header from './Header'
import {connect} from 'react-redux'
import {getUserAuth} from '../../redux/auth-reduser'




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

const HeaderComponent = connect(mapStateToProps, {getUserAuth})(HeaderComponentApi) 

export default HeaderComponent