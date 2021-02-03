import React from "react";
import classes from "./MyInfo.module.css"
import Preloader from "../../Preloader/Preloader";
import Status from "../../Status/Status";
import StatusH from "../../Status/StatusH";


const PersonInfo = (props) => {
    // if (!props.profile) {
    //     return <Preloader/>
    // }
    return(
        <div className="TopInfo">
            {/*<div>*/}
            {/*    <img src="https://static.ukrinform.com/photos/2015_10/thumb_files/630_360_1445509380-6448.jpg" width="100%" height="250px"></img>*/}
            {/*</div>*/}
            {/*<div className={classes.description}>*/}
            {/*    <img src={props.profile.photos.large}/> ?*/}
            {/*    <img src={props.profile.photos.large}/> : <img src="https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg" width="100%" height="200px"/>*/}
            {/*</div>*/}
            {/*<Status status={props.status} updateStatus={props.updateStatus} />*/}
            <StatusH status={props.status} updateStatus={props.updateStatus} />
        </div>
    )
};

export default PersonInfo;