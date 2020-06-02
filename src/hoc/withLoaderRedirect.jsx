import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Loader from '../components/grid/loader/Loader'

const mapStateToProps = (state) => ({
	profile: state.profile
})

export const withLoaderRedirectProfile = (Component) => {

	class withLoaderProfile extends React.Component{
		render(){
			if(!this.props.profile.isLoader){
				return <Loader />
			}else if(this.props.profile.isLoader){
				return <Component {...this.props} />
			}
		}
	}

	
	let LoaderRedirect = compose(connect(mapStateToProps))(withLoaderProfile)

	return LoaderRedirect
}





