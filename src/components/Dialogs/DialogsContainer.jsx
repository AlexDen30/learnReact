import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import Message from './Message/Message';


    let mapStateToProps = (state) => {
        return {
            dialogsElements: state.dialogsPage.dialogsData.map((dialog) =>
            <DialogItem name={dialog.name} id={dialog.id} />),
            messagesElements: state.dialogsPage.messagesData.map((message) =>
            <Message msg={message.msg} />),
            newMessageBody: state.dialogsPage.newMessageBody,
        }
    }
    
    
    let mapDispatchToProps = (dispatch) => {
        return {
            sendMessage: () => {
                dispatch(sendMessageCreator());
            },
            updateNewMessageBody: (body) => {
                dispatch(updateNewMessageBodyCreator(body));
            },
        }
    }

    //HOCs

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs);