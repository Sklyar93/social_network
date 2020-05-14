const FOLLOWED = 'FOLLOWED'
const NOFOLLOWED = 'NOFOLLOWED'
const SETUSER = 'SETUSER'

let initialState =  {
	usersArray: [	
	]	
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
			usersArray: [...state.usersArray, ...action.users]
		}
	}

	switch(action.type){
		case FOLLOWED :
			return followed(action.userId)
		case NOFOLLOWED : 
			return nofollowed(action.userId)
		case SETUSER :
			return setUsers(action.users)
		default: 
			return state
	}		
}


export const followedAC = (userId) => ({
	type: FOLLOWED,
	userId
})

export const nofollowedAC = (userId) => ({
	type: NOFOLLOWED,
	userId
})

export const setUsersAC = (users) => ({
	type: SETUSER,
	users
})

export default userReduser