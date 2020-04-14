import React from 'react'
import ReactDom from 'react-dom'
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import Contents from './contents/Contents'
const App = () => {
	return(
		<div>
			<Header />
			<Navbar />
			<Contents />
		</div>
	)
}
export default App