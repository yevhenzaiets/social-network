import React, {Suspense} from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./components/User/UsersContainer";
import TittleContainer from "./components/Tittle/TittleContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import withRouter from "react-router-dom/es/withRouter";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const Login = React.lazy(() => import("./components/Login/Login"))
const MainContainer = React.lazy(() => import("./components/Main/MainContainer"))

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="main-page">
                <TittleContainer/>
                <Menu/>
                <div>
                    <Route path='/dialogs' render={() => {
                        return <Suspense fallback={<Preloader/>}>
                            <DialogsContainer/>
                        </Suspense>
                    }}/>
                    <Route path='/main/:userId?' render={() => {
                        return <Suspense fallback={<Preloader/>}>
                            <MainContainer/>
                        </Suspense>
                    }}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => {
                        return <Suspense fallback={<Preloader/>}>
                            <Login/>
                        </Suspense>
                    }}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App);
