import React from 'react'
import Loadergif from '../../../img/grid/loader.gif'


const Loader = (props) => {
	console.log(Loadergif)
	return(
		<div className='Loader'>
			<img src={Loadergif}  />
		</div>
	)
}
 export default Loader