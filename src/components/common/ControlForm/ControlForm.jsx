import React from "react";
import classes from "./ControlForm.module.css"

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={classes.formControl + "" + classes.error}>
            <textarea {...input} {...props} />
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}


export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={classes.formControl + "" + classes.error}>
            <input {...input} {...props} />
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}
