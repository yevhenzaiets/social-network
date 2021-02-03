import React from "react";
import Main from "./Main";
import * as axios from "axios";
import {getStatusTC, getUserProfileTC, updateStatus} from "../../Redux/mainPage-reducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";



class MainContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfileTC(userId);
        this.props.getStatusTC(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to='/login' />
        return (
            <Main {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.mainPage.profile,
        isAuth: state.auth.isAuth,
        status: state.mainPage.status,
        authorizedUserId: state.auth.userId
    }
}

export default compose(
    connect (mapStateToProps, {getUserProfileTC, getStatusTC, updateStatus}),
    withRouter,
    // withAuthRedirect
)(MainContainer);


