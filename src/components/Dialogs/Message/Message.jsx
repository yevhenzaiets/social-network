import classes from "../Dialogs.module.css";
import React from "react";

const SmsText = (props) => {
    return(
        <div className={classes.message}>{props.sms}</div>
    )
};

export default SmsText;