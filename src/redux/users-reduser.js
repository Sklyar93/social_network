const FOLLOWED = 'FOLLOWED'
const NOFOLLOWED = 'NOFOLLOWED'
const SETUSER = 'SETUSER'
const CURRENT_PAGE = 'CURRENT_PAGE'
const TOTAL_USER_COUNT = 'TOTAL_USER_COUNT'
const CURRENT_PAGE_MINYS = 'CURRENT_PAGE_MINYS'
const CURRENT_PAGE_PLUS = 'CURRENT_PAGE_PLUS'
const IS_LOADER = 'IS_LOADER'

let initialState =  {
	usersArray: [	
	],
	pageSize: 10,
	totalCount: 0,
	currentPage: 1,
	isLoader: true
}



const userReduser = (state = initialState, action) => {
	const followed = (userId) => ({
		...state,
		usersArray: state.usersArray.map( u =>
			{
				if(u.id === action.userId){
					return {
						...u,
						followed: false
					}
				}
				return u
			}
		)		
	})

	const nofollowed = (userId) => ({
		...state,
		usersArray: state.usersArray.map( u =>
			{
				if(u.id === action.userId){
					return {
						...u,
						followed: true
					}
				}
				return u
			}
		)		
	})

	const setUsers = (users) => {
		return {	
			...state,
			usersArray: [...action.users]
		}
	}

	const currentPageChange = (page) => {
		return {
			...state,
			currentPage: action.page
		}
	}

	const totalUserCount = (count) =>{
		return {
			...state,
			totalCount: action.count
		}
	}

	const currentPageMinys = (page) => ({
		...state,
		currentPage: action.page - 10
	})

	const currentPagePlus = (page) => ({
		...state,
		currentPage: action.page + 10
	})

	const isChangeLoader = (bool) => ({
		...state,
		isLoader: action.bool
	})

	switch(action.type){
		case FOLLOWED :
			return followed(action.userId)
		case NOFOLLOWED : 
			return nofollowed(action.userId)
		case SETUSER :
			return setUsers(action.users)
		case CURRENT_PAGE:
			return currentPageChange(action.page)
		case TOTAL_USER_COUNT:
			return totalUserCount(action.count)
		case CURRENT_PAGE_MINYS: 
			return currentPageMinys(action.page)
		case CURRENT_PAGE_PLUS:
			return currentPagePlus(action.page)
		case IS_LOADER:
			return isChangeLoader(action.bool)
		default: 
			return state
	}		
}


export const followed = (userId) => ({
	type: FOLLOWED,
	userId
})

export const nofollowed = (userId) => ({
	type: NOFOLLOWED,
	userId
})

export const setUsers = (users) => ({
	type: SETUSER,
	users
})

export const currentPageChange = (page) => ({
	type: CURRENT_PAGE,
	page
})

export const totalUserCount = (count) => ({
	type: TOTAL_USER_COUNT,
	count
})

export const currentPageMinys = (page) => ({
	type: CURRENT_PAGE_MINYS,
	page
})

export const currentPagePlus = (page) => ({
	type: CURRENT_PAGE_PLUS,
	page
})

export const isChangeLoader = (bool) => ({
	type: IS_LOADER,
	bool
})

export default userReduser