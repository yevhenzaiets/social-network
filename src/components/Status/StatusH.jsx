import React, {useState} from "react";


const StatusH = (props) => {

    let [editMode,setEditMode] = useState(false)
    let [status,setStatus] = useState(props.status)
    console.log(status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return <div>
        {!editMode &&
        <div>
            <span onDoubleClick={activateEditMode}> {props.status || "---"}</span>
        </div>
        }
        {editMode &&
        <div>
            <input autoFocus={true}
                   onChange={onStatusChange}
                   value={status}
                   onBlur={deactivateEditMode} />
        </div>
        }
    </div>
}

export default StatusH

// class Status extends React.Component {
//
//     state = {
//         editMode: false,
//         status: this.props.status
//     }
//
//     activateEditMode = () => {
//         this.setState({
//             editMode: true
//         })
//     }
//
//     deactivateEditMode = () => {
//         this.setState({
//             editMode: false
//         });
//         this.props.updateStatus(this.state.status)
//     }
//
//     onStatusChange = (e) => {
//         this.setState({
//             status: e.currentTarget.value
//         });
//     }
//
//     render() {
//         return <div>
//             {!this.state.editMode &&
//                 <div>
//                     <span onDoubleClick={this.activateEditMode}> {this.props.status || "Hi" }</span>
//                 </div>
//             }
//             {this.state.editMode &&
//                 <div>
//                     <input onChange={this.onStatusChange} autoFocus={true}
//                            onBlur={this.deactivateEditMode} type="text"
//                            value={this.state.status}/>
//                 </div>
//             }
//         </div>
//     }
// }
//
// export default Status;