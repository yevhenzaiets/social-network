let initialState = {
    myFriends: [
        {friend: "Anton", id: "1"},
        {friend: "Ivan", id: "2"},
        {friend: "Stepan", id: "3"},
        {friend: "Jora", id: "4"},
        {friend: "Roman", id: "5"}
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;