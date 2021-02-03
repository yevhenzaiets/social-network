import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import Tittle from "./Tittle";
import {logout} from "../../Redux/auth-reducer";



class TittleContainer extends React.Component {

    // componentDidMount() {
    //     this.props.getUserAuthTC()
    // }

    render() {
        return <Tittle {...this.props} />
    }
}

const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth,
        login: state.auth.login
})


export default connect(mapStateToProps, {logout} ) (TittleContainer);
