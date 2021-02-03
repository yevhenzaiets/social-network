import React from "react";
import mainPageReducer, {addPostActionCreator} from "./mainPage-reducer";

let state = {
    posts: [
        {id: "1", sms: "Hey, how are you?", likesCount: 8},
        {id: "2", sms: "Bingoooo", likesCount: 17}
    ]
}

test('new post will be added', () => {
    let action = addPostActionCreator("added post")
    let newState = mainPageReducer(state, action)
    expect(newState.posts.length).toBe(3)
})

test('sms in new post will be correct', () => {
    let action = addPostActionCreator("added post")
    let newState = mainPageReducer(state, action)
    expect(newState.posts[2].sms).toBe("added post")
})

// test('new post will be correct', () => {
//     let action = addPostActionCreator("added post")
//     let newState = mainPageReducer(state, action)
//     expect(newState.posts[2].sms).toBe("added post")
// })


