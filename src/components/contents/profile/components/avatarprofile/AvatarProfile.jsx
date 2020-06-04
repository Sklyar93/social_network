import React from 'react'
import Avatar from './avatar/Avatar'
import {connect} from 'react-redux'
import { profileArray, profileIsLoader }  from '../../../../../redux/selectors/profile-selectors'

const AvatarProfile = (props) => {
	return(
		<div className="profile__avatar">
			<Avatar profileArray = {props.profileArray}/>
		</div>
	)
}

const mapStateToProps = (state) => ({
	profileArray: profileArray(state),
	profileIsLoader: profileIsLoader(state)
})

export default connect(mapStateToProps)(AvatarProfile)