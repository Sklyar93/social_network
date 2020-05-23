import React from 'react'
import {connect} from 'react-redux'
import AuthNavlink from './AuthNavlink'
import Auth from './Auth'

class ClassAuthComponent extends React.Component{
	render(){
		return(
			<div>
				<AuthNavlink />
				<Auth {...this.props.auth} />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth
})

const AuthComponent = connect(mapStateToProps)(ClassAuthComponent)
export default AuthComponent