import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import SmsText from "./Message/Message";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../Redux/messagePage-reducer";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../helpers/validators";
import {Textarea} from "../common/ControlForm/ControlForm";



const Dialogs = (props) => {

    let state = props.messagePage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.message.map(m => <SmsText sms={m.sms} />);
    // let newMessageText = state.newMessageText;


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogUser}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                {/*<div>*/}
                {/*    <div><textarea value={ newMessageText }*/}
                {/*                   placeholder="Enter your message"*/}
                {/*                   onChange={ onNewMessageChange } ></textarea></div>*/}
                {/*    <div><button onClick={ onSendMessageClick }></button> SEND </div>*/}
                {/*</div>*/}
                <DialogReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
};

const maxLength50 = maxLength(50)

const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={"newMessageText"}
                       placeholder={"Enter your message"}
                       validate={[required, maxLength50]}/>
            </div>
            <div>
                <button>SEND</button>
            </div>
        </form>
    )
}

const DialogReduxForm = reduxForm({
    form: "messageDialogForm"
})(DialogForm)


export default Dialogs;