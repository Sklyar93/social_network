import * as axios from 'axios'

let axiosCreate = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	header:  {
		"API-KEY": "bfce57c6-9639-4416-9a17-8ff3148b4918"
	}	
})



export const getApi ={
 	Users(count, page = 1){
	 	let Url = `users?count=${count}&page=${page}`
		return axiosCreate
		.get(Url)
		.then((response) => {
			return response.data
		})
	},
	Header(){
		let Url = `auth/me`
		return axiosCreate
		.get(Url)
		.then((response) => {
			return response.data
		})
	},
	Profile(userId){
		let Url = `profile/`+userId
		return axiosCreate
		.get(Url)
		.then((response) => {
			return response.data
		})
	},
	Status(userId){
		let Url = `/profile/status/`+userId
		return axiosCreate
		.get(Url)
		.then((response) => {
			return response.data
		})
	}

}

export const postApi = {
	Users(id){
	let postApiUrl = `https://social-network.samuraijs.com/api/1.0/follow/${id}`
		return axios
			.post(
				postApiUrl, 
				{},
				{
					withCredentials: true,
					headers:  {
						"API-KEY": "bfce57c6-9639-4416-9a17-8ff3148b4918"
					}
				}	
			)
	}
}


export const putApi = {
	Status(status){
		let Url = `https://social-network.samuraijs.com/api/1.0/profile/status`
		return axios
		.put(
		Url, 
		{status},
		{
			withCredentials: true,
			headers:  {
				"API-KEY": "bfce57c6-9639-4416-9a17-8ff3148b4918"
			}
		})
	}

}

export const deleteApi = {
	Users(id){
		let deleteApiUrl = `https://social-network.samuraijs.com/api/1.0/follow/${id}`
		return axios.delete(
				deleteApiUrl, 
				{
					withCredentials: true,
					headers:  {
						"API-KEY": "bfce57c6-9639-4416-9a17-8ff3148b4918"
					}
				}	
			)
	}
}



