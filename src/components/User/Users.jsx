import React from "react";
import Paginator from "./Common/Paginator";
import User from "./User";


let Users = ({totalUsersCount, pageSize, onPageChanged, currentPage, users, ...props}) => {

    return <div>
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize}
                   onPageChanged={onPageChanged} currentPage={currentPage}/>
        <div>
            {
                users.map(u => <User user={u}
                                     key={u.id}
                                     subscribe={props.subscribe}
                                     unsubscribe={props.unsubscribe}/>)
            }
        </div>
    </div>
}

export default Users;
