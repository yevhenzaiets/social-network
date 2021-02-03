import React from "react";


const Friends = (props) => {

    let myFriends = props.state.myFriends.map(f => <Friends friend={f.friend} />);

    return(
        <div>
            { myFriends }
        </div>
    )
};

export default Friends;