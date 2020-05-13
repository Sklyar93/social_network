const FOLLOW = 'FOLLOW'
const NOFOLLOW = 'NOFOLLOW'

let initialState =  {
	usersArray: [
		{id: 1, follow: true, name: 'Valera', surname: 'Sklyar', age: '26', avatar: 'src/Avatar/valera.jpeg', residence: {
			country: 'Russia', city: 'Krasnodar'
		}},
		{id: 2, follow: false, name: 'Tanya', surname: 'Sinchenko', age: '24', avatar: 'src/Avatar/tanya.jpeg', residence: {
			country: 'Russia', city: 'Krasnodar'
		}},
		{id: 3, follow: false, name: 'Bean', surname: '', age: '46', avatar: 'src/Avatar/bean.jpeg', residence: {
			country: 'UK', city: 'London'
		}}
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

	switch(action.type){
		case FOLLOW :
			return follow(action.userId)
		case NOFOLLOW : 
			return nofollow(action.userId)
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

export default userReduser