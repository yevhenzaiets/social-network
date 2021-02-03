import React from "react";
import {connect} from "react-redux";
import {
    getUsersTC,
    setCurrentPage,
    setUsers,
    showPreloader,
    subscribe,
    unsubscribe
} from "../../Redux/users-reduser";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../Preloader/Preloader";
import {usersAPI} from "../../Api/api";
import {currentPage, getPageSize, getUsers, isFetching,totalUsersCount} from "../../Redux/users-selectors";



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.showPreloader(true)
        this.props.getUsersTC(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unsubscribe={this.props.unsubscribe}
                   subscribe={this.props.subscribe}
                   onPageChanged={this.onPageChanged}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: totalUsersCount(state),
        currentPage: currentPage(state),
        isFetching: isFetching(state)
    }
}


export default connect (mapStateToProps, {unsubscribe, subscribe,setUsers, setCurrentPage,showPreloader, getUsersTC})(UsersContainer);
