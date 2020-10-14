import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value); 
    }

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    return (
        <div>
            {!editMode
                ?
                <div>
                    <span onDoubleClick={activateEditMode}>{!props.status ? 'no status' : props.status}</span>
                </div>
                :
                <div>
                    <input onChange={onStatusChange}  autoFocus={true} onBlur={deactivateEditMode}  value={status}></input>
                </div>
            }


        </div>
    );


}


export default ProfileStatusWithHooks;