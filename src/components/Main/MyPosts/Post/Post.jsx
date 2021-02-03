import React from 'react';
import classes from "../Post/Post.module.css"

const Post = (props) => {
    return (
        <div className={classes.imgProf}>
            <img src="https://archilab.online/images/1/123.jpg"></img>
            { props.sms }
            <div>
                <span>likes {props.likesCount}</span>
            </div>
        </div>
    )
};

export default Post