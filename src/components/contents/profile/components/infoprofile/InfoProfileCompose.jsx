import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {updatesStatus} from '../../../../../redux/status-reduser'
import {isMeProfile, status} from '../../../../../redux/selectors/profile-selectors'
import InfoProfile from './InfoProfile'


const InfoProfileComponent = (props) => {

	return (
		<>
			<InfoProfile profile = {props.profile} isMeProfile = {props.isMeProfile} status = {props.status} updatesStatus = {props.updatesStatus} />
		</>
	) 
}

const mapStateToProps = (state) => ({
	isMeProfile: isMeProfile(state),
	profile: state.profile,
	status: status(state)
})

const InfoProfileCompose = compose(connect(mapStateToProps, {updatesStatus}) )(InfoProfileComponent)


export default InfoProfileCompose