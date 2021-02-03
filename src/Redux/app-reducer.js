import {getUserAuthTC} from "./auth-reducer";

const INITIALIZED_SUCСESS = "INITIALIZED-SUCCESS"

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCСESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

export const initializationAC = () => ({type: INITIALIZED_SUCСESS})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getUserAuthTC())
    Promise.all([promise])
        .then(() => {
            dispatch(initializationAC())
        })
}

export default appReducer