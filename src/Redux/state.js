import mainPageReducer from "./mainPage-reducer";
import messagePageReducer from "./messagePage-reducer";
import sidebarReducer from "./sideBar-reducer";


let store = {
    _state: {
        mainPage: {
            posts: [
                {id: "1", sms: "Hey, how are you?", likesCount: 8},
                {id: "2", sms: "Bingoooo", likesCount: 17}
            ],
            newPostText: ""
        },
        messagePage: {
            message: [
                {id: 1, sms: "Hi" },
                {id: 2, sms: "Yo"}
            ],
            dialogs: [
                {id: "1", name: "Stepan"},
                {id: "2", name: "Ivan"},
                {id: "3", name: "Valera"},
                {id: "4", name: "Grisha"},
                {id: "5", name: "Stasik"}
            ],
            // newMessageText: ""
        },
        sidebar: {
            myFriends: [
                {friend: "Anton", id: "1"},
                {friend: "Ivan", id: "2"},
                {friend: "Stepan", id: "3"},
                {friend: "Jora", id: "4"},
                {friend: "Roman", id: "5"}
            ]
        }
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.mainPage = mainPageReducer(this._state.mainPage, action)
        this._state.messagePage = messagePageReducer(this._state.messagePage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        // this._rerenderEntireTree(this._state);

    },
}

window.store = store;

export default store;