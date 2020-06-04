import React from 'react'
import noneAvatar from '../../../../../../img/grid/noneAvatar.png'
import Loader from '../../../../../../img/grid/Loader.gif'

const Avatar = (props) => {
	return(
		<>
			{
			props.profileArray.map(s =>
			props.profileIsLoader ? <Loader /> : 	
			<img src = {s.photos.small != null ? s.photos.small : noneAvatar} />
			)
			}
		</>
	)

}
export default Avatar