import React from 'react'

const UsersPages = (props) => {
	
	const currentPageMinys = () => {
		props.currentPageMinys(props.users.currentPage)
	}
	
	const currentPagePlus = () => {
		props.currentPagePlus(props.users.currentPage)
	}
	
	const currentPageChange = (page) => {
		props.currentPageChange(page)
	}
	
	let countPage = Math.ceil(props.users.totalCount/props.users.pageSize)
	
	let countPageArray = []

	for(let i = props.users.currentPage; i <= props.users.currentPage + 5; i++){
		countPageArray[i-1] = i
	}

	return(
		<>
			{props.users.currentPage >= 10 && <button onClick = {currentPageMinys}>Предыдущие 10</button>}
			{countPageArray.map(c => <button className = {c === props.users.currentPage ? "active-btn" : null } onClick = {() => {currentPageChange(c)}}>{c}</button>)}
			{props.users.currentPage < props.users.totalCount/props.users.pageSize && <button onClick = {currentPagePlus}>Следующие 10</button>}
		</>
	)
}

export default UsersPages