import React from 'react';
import classes from '../Menu/Menu.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import state from "../../Redux/state";

const Menu = (props) => {
    return (
        <div>
            <nav className={classes.menu}>
                <ul>
                    <li><NavLink to="/Main"> Profile </NavLink></li>
                    <li><NavLink to="/Dialogs"> Messages </NavLink></li>
                    <li><NavLink to="/Users"> Users </NavLink></li>
                    <li><a>News</a></li>
                    <li><a>Music</a></li>
                    <li><a>Settings</a></li>
                </ul>
            </nav>
        </div>
    )
};

export default Menu;