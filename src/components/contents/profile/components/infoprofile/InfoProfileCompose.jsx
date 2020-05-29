import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {updatesStatus} from '../../../../../redux/status-reduser'
import InfoProfile from './InfoProfile'


const InfoProfileComponent = (props) => {

	return (
		<>
			<InfoProfile profile = {props.profile} status = {props.status} updatesStatus = {props.updatesStatus} />
		</>
	) 
}

const mapStateToProps = (state) => ({
	profile: state.profile,
	status: state.status.status
})

const InfoProfileCompose = compose(connect(mapStateToProps, {updatesStatus}) )(InfoProfileComponent)


export default InfoProfileCompose