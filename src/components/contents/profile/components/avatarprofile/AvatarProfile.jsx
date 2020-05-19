import React from 'react'
import Avatar from './avatar/Avatar'
import {connect} from 'react-redux'

class AvatarProfileContainer extends React.Component{
	render(){
		return(
			<div className="profile__avatar">
				<Avatar state = {this.props.state}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	state: state.profile
})

const AvatarProfile = connect(mapStateToProps)(AvatarProfileContainer)

export default AvatarProfile