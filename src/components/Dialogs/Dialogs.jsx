import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        debugger;
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {props.dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{props.messagesElements}
                </div>
                <div>
                    <div><textarea 
                        value={props.newMessageBody} 
                        placeholder='Enter your message: '
                        onChange={onNewMessageChange}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>   
            </div>
        </div>
    )
}

export default Dialogs;