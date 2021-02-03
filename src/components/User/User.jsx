import React from "react";
import styles from "./User.module.css"
import {NavLink} from "react-router-dom";

let User = ({user, unsubscribe, subscribe}) => {
    return <div>
        <div className={styles.row}>
            <div className={styles.avaAndBut}>
                <div className={styles.avatar}>
                    <NavLink to={'/main/' + user.id}>
                        {user.photos !== null ?
                            <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"/> : user.photos.small}
                    </NavLink>
                </div>
                <div> {user.followed
                    ? <button className={styles.subscribe} onClick={() => {
                        unsubscribe(user.id)
                    }}>Unsubscribe</button> :
                    <button className={styles.subscribe} onClick={() => {
                        subscribe(user.id)
                    }}>Subscribe</button>}
                </div>
            </div>
            <div className={styles.userInfo}>
                <div>{user.name}</div>
                <div>`{user.uniqueUrlName} user country`</div>
            </div>
        </div>
    </div>
}

export default User