import React from 'react'

const ContactItem = (props) => {
	return(
		<div className="messages__contactitem">
		<ul>
			<li>
				<img src={props.img} />
				<a>{props.name}</a>
			</li>
		</ul>
		</div>
	)
}
export default ContactItem