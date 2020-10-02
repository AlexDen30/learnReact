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

let initialState = {
  dialogsData: [
    { name: 'Pasha', id: '1' },
    { name: 'Masha', id: '2' },
    { name: 'Sasha', id: '3' },
    { name: 'Dasha', id: '4' },
  ],
  messagesData: [
    { msg: 'Hello!', id: '1' },
    { msg: 'Nice, bro!', id: '2' },
    { msg: 'kek!', id: '3' },
  ],
  newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {

    case SEND_MESSAGE:
      let newMessage = {
        id: 6,
        msg: state.newMessageBody,
      };

      return {
        ...state,
        newMessageBody: '',
        messagesData: [...state.messagesData, newMessage]
      };

    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.newText
      };

    default:
      return state;
  }
}

export default dialogsReducer;