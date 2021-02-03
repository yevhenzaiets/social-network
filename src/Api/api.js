import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    key: {
        "API-KEY": "6070d609-7209-4d7e-b68d-c86179c676cf"
    }
})

export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    // subscribe (userId) {
    //     return instance.post(`follow/` + userId)
    // },
    // unsubscribe (userId) {
    //     return instance.delete(`follow/` + userId)
    // },
    // getProfile (userId) {
    //     return instance.get(`profile/` + userId)
    //         .then(response => {
    //             this.props.setProfileAC(response.data)
    //         })
    // }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}