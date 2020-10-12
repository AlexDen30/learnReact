const SEND_MESSAGE = 'SEND-MESSAGE';

export const sendMessageCreator = (message) => {
  return {
    type: SEND_MESSAGE,
    newMessage: message,
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
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {

    case SEND_MESSAGE:
      let newMessage = {
        id: 6,
        msg: action.newMessage,
      };

      return {
        ...state,
        messagesData: [...state.messagesData, newMessage]
      };

    default:
      return state;
  }
}

export default dialogsReducer;