import {usersAPI} from "../Api/api";
import {updateObjectInArray} from "../helpers/refactors-object";

const SUBSCRIBE = "SUBSCRIBE"
const UNSUBSCRIBE = "UNSUBSCRIBE"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SHOW_PRELOADER = "SHOW_PRELOADER"
const TOTAL_USERS_COUNT = "TOTAL-USERS-COUNT"

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBSCRIBE: {
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId,"id",{followed: true})
            }
        }
        case UNSUBSCRIBE: {
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId,"id",{followed: false})
            }
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage }
        }
        case SHOW_PRELOADER: {
            return {...state,  isFetching: action.isFetching}
        }
        case TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount:action.totalUsersCount}
        }
        default:
            return state;
    }
}

export const subscribe = (userId) => ({type: SUBSCRIBE, userId})
export const unsubscribe = (userId) => ({type: UNSUBSCRIBE, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const showPreloader = (isFetching) => ({type:SHOW_PRELOADER, isFetching})
export const setTotalUsersCountAC = (totalUsersCount) => ({type:TOTAL_USERS_COUNT, totalUsersCount})


export const getUsersTC = (currentPage, pageSize) => async (dispatch) => {
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(showPreloader(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCountAC(data.totalCount))
}

export default usersReducer;