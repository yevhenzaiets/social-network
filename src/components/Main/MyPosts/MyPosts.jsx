import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/mainPage-reducer";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/ControlForm/ControlForm";
import {maxLength, required} from "../../../helpers/validators";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post sms={p.sms} likesCount={p.likesCount} />);
    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={classes.wall}>
            <div>
                My posts
            </div>
            <MyPostReduxForm onSubmit={onAddPost}/>
            <div>
                {postsElements}
            </div>
        </div>
    )
};

const maxLength15 = maxLength(15)

const MyPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPostText"} validate={[required, maxLength15]}/>
            </div>
            <div>
                <button>ADD POST</button>
            </div>
        </form>
    )
}

const MyPostReduxForm = reduxForm({form: "myPost"})(MyPostForm)

export default MyPosts;