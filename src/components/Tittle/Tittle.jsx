import React from 'react';
import classes from '../Tittle/Tittle.module.css'
import {NavLink} from "react-router-dom";


const Tittle = (props) => {

    return (
        <header className={classes.tittle}>
            <div className={classes.image}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png"></img>
            </div>
            <div className={classes.log}>
                {props.isAuth
                    ? <div>{props.login}
                    <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    ) 
}

export default Tittle;