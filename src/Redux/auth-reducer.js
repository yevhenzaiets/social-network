import {authAPI} from "../Api/api";
import {stopSubmit} from "redux-form";
const AUTHORIZED = "AUTHORIZED"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHORIZED: {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }
}


export const authorizedUserAC = (userId, email, login, isAuth) => ({type: AUTHORIZED, data: {userId, email, login, isAuth}})

export const getUserAuthTC = () => async (dispatch) => {
    let response = await authAPI.me()

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(authorizedUserAC(id, email, login, true))
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(getUserAuthTC())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error!"
        dispatch(stopSubmit("login", {_error: message}))
    }

}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(authorizedUserAC(null, null, null, false))
    }
}

export default authReducer;