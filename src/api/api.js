import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "385c477f-762b-46f5-a84d-6bf641b432c6"
    }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    unfollow (id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    },

    follow (id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    }    
} 

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
            .then(response => response.data);
    }
}

export const profileAPI = {
    getUser (userId) {
        return instance.get('profile/' + userId)
            .then(response => response.data);
    }
}