import {applyMiddleware, combineReducers, createStore} from "redux";
import mainPageReducer from "./mainPage-reducer";
import messagePageReducer from "./messagePage-reducer";
import sidebarReducer from "./sideBar-reducer";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";


let reducers = combineReducers({
    mainPage: mainPageReducer,
    messagePage: messagePageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;