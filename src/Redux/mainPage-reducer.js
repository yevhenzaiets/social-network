import {profileAPI, usersAPI} from "../Api/api";

const ADD_POST = "ADD-POST";
const SET_PROFILE = "SET-PROFILE";
const SET_STATUS = "SET-STATUS";


let initialState = {
    posts: [
        {id: "1", sms: "Hey, how are you?", likesCount: 8},
        {id: "2", sms: "Bingoooo", likesCount: 17}
    ],
    profile: null,
    status: null
}


const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: "5",
                sms: action.newPostText,
                likesCount: 5
            };
            let stateCopy = {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
            return stateCopy;
        }
        case SET_PROFILE: {
            return {...state, profile:action.profile}
        }
        case SET_STATUS: {
            return {...state, status:action.status}
        }
        default:
            return state;
    }

}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setProfileAC = (profile) => ({type: SET_PROFILE, profile})
export const setStatusAC = (status) => ({type: SET_STATUS, status})

export const getUserProfileTC = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setProfileAC(response.data))
    })
}

export const getStatusTC = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}

export default mainPageReducer;