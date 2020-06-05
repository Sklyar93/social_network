import React from 'react'

const UsersPages = (props) => {
	
	const currentPageMinys = () => {
		props.currentPageMinys(props.currentPage)
	}
	
	const currentPagePlus = () => {
		props.currentPagePlus(props.currentPage)
	}
	
	const currentPageChange = (page) => {
		props.currentPageChange(page)
	}
	
	let countPage = Math.ceil(props.totalCount/props.pageSize)
	
	let countPageArray = []

	for(let i = props.currentPage; i <= props.currentPage + 5; i++){
		countPageArray[i-1] = i
	}
	console.log('UsersPages')
	return(
		<>
			{props.currentPage >= 10 && <button onClick = {currentPageMinys}>Предыдущие 10</button>}
			{countPageArray.map(c => <button className = {c === props.currentPage ? "active-btn" : null } onClick = {() => {currentPageChange(c)}}>{c}</button>)}
			{props.currentPage < props.totalCount/props.pageSize && <button onClick = {currentPagePlus}>Следующие 10</button>}
		</>
	)
}

export default UsersPages