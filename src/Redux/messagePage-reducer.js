const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
    ]
};


const messagePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageText
            return {
                ...state,
                message: [...state.message,{id: 18, sms: body} ]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageText) => ({type:SEND_MESSAGE, newMessageText})


export default messagePageReducer;