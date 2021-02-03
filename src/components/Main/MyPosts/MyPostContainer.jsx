import React from 'react';
import MyPosts from "./MyPosts";
import mainPageReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/mainPage-reducer";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {
        posts: state.mainPage.posts,
        newPostText: state.mainPage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostElement) => {
            dispatch(addPostActionCreator(newPostElement))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;