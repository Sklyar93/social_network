import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

const mapStateToProps = (state) => ({
	auth: state.auth.isAuth	
})

export const withAuthRedirectComponent = (Component) => {
	
	class AuthRedirectComponent extends React.Component{
		render(){
			if(this.props.auth){
				
				return(
					<>
						<Component {...this.props}/>
					</>
				)
			}else{
				
				return (
					<>
						<Redirect to='/auth' />
					</>
				)
			}
		}	
	}

	let AuthRedirect = connect(mapStateToProps)(AuthRedirectComponent)
	
	return AuthRedirect
}




