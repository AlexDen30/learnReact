import dialogsReducer from "./dialogs-reducer";
import postsReducer from "./posts-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
  _state: {
    dialogsPage: {
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
    },

    postsPage: {
      postData: [
        { message: 'Hello, everyone!', likesCount: 10 },
        { message: 'Hi, dude', likesCount: 5 },
      ],
      newPostText: '',
    },

    sidebar: {},
  },

  _callSubscriber() {

  },

  getState() {
    return this._state;
  },

  subscribe(observ) {
    this._callSubscriber = observ;
  },

  dispatch(action) {

    this._state.postsPage = postsReducer(this._state.postsPage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    
    this._callSubscriber(this._state);
  }
}

export default store;

window.store = store