import React from 'react';
import classes from '../Main/Main.module.css'
import MyPosts from './MyPosts/MyPosts';
import PersonInfo from "./MyInfo/PersonInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";

const Main = (props) => {
    return (
        <div className={classes.main}>
            <PersonInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    )
};

export default Main;