import React from 'react'
import ReactDom from 'react-dom'


const Search = () => {
	return(
		<div className = "header__search">
			<input type="text" placeholder="Искать" />
			<button>Найти</button>
		</div>
	)
}
export default Search