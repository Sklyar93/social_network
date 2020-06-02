import React from 'react'
import ReactDom from 'react-dom'
import Header from './Header'
import {connect} from 'react-redux'





class HeaderComponentApi extends React.Component{
	
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

const HeaderComponent = connect(mapStateToProps)(HeaderComponentApi) 

export default HeaderComponent