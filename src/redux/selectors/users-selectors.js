import {createSelector} from "reselect"

export const isLoaderUsers = (state) => {
	return state.users.isLoaderUser
}

export const selectorStatusUsers = (state) => {
	return  state.status.status
}

export const currentPageUsers = (state) => {
	return state.users.currentPage
}

export const totalCountUsers = (state) => {
	return state.users.totalCount
}

export const usersArray = (state) => {
	return state.users.usersArray
}

const followDisabledArray = (state) => {
	return state.users.followDisabledArray
}

export const followDisabledSelector = createSelector(followDisabledArray ,(follow) => {
	return  follow
}) 

export const pageSize = (state) => {
	return state.users.pageSize
}


