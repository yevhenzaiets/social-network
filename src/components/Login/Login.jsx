import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login, logout} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {required} from "../../helpers/validators";
import {Input} from "../common/ControlForm/ControlForm";
import classes from "../common/ControlForm/ControlForm.module.css"

const LoginForm = ({handleSubmit,error}) => {
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"email"} name={"email"} component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} component={Input}
                       type={"password"} validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
            </div>
            {error && <div className={classes.formError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/Main"}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{login, logout})(Login)
