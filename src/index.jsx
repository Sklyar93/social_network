import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import 'normalize.css'

let contactsArray = [
	{id: 0, name: 'Валерий'},
	{id: 1, name: 'Татьяна'},
	{id: 2, name: 'Никита'}
]

let messageArray = [
	{id: 0, messageText: 'привет'},
	{id: 1, messageText: 'как дела?'}
]

	

ReactDom.render(
	<App messageArray = {messageArray} contactsArray={contactsArray} />,
	document.getElementById('root')
)
