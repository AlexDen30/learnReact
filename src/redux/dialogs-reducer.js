const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const sendMessageCreator = () => {
    return {
      type: SEND_MESSAGE,
    }
  }
  
  export const updateNewMessageBodyCreator = (body) => {
    return {
      type: UPDATE_NEW_MESSAGE_BODY,
      newText: body,
    }
  }

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.messagesData.push({
                id: 6,
                msg: body,
            });
            state.newMessageBody = '';
            break;

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newText;
            break;
        default:
            return state;
    }

    return state;
}

export default dialogsReducer;