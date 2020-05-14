const FOLLOW = 'FOLLOW'
const NOFOLLOW = 'NOFOLLOW'
const SETUSER = 'SETUSER'

let initialState =  {
	usersArray: [	
	]	
}



const userReduser = (state = initialState, action) => {
	const follow = (userId) => ({
		...state,
		usersArray: state.usersArray.map( u =>
			{
				if(u.id === action.userId){
					return {
						...u,
						follow: false
					}
				}
				return u
			}
		)		
	})

	const nofollow = (userId) => ({
		...state,
		usersArray: state.usersArray.map( u =>
			{
				if(u.id === action.userId){
					return {
						...u,
						follow: true
					}
				}
				return u
			}
		)		
	})

	const setUsers = (users) => {
		return {	
			...state,
			usersArray: [...state.usersArray, ...action.users]
		}
	}

	switch(action.type){
		case FOLLOW :
			return follow(action.userId)
		case NOFOLLOW : 
			return nofollow(action.userId)
		case SETUSER :
			return setUsers(action.users)
		default: 
			return state
	}		
}


export const followAC = (userId) => ({
	type: FOLLOW,
	userId
})

export const nofollowAC = (userId) => ({
	type: NOFOLLOW,
	userId
})

export const setUsersAC = (users) => ({
	type: SETUSER,
	users
})

export default userReduser