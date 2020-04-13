import React from 'react'
import ReactDom from 'react-dom'
import ('./scss/main.scss')

const App = () =>(
	<h1>Все ок</h1>
)

ReactDom.render(
	<App />,
	document.getElementById('root')
)

console.log('привет')