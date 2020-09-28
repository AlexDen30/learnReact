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
        { msg: 'Hello!' },
        { msg: 'Nice, bro!' },
        { msg: 'kek!' },
      ],
    },

    postsPage: {
      postData: [
        { message: 'Hello, everyone!', likesCount: 10 },
        { message: 'Hi, dude', likesCount: 5 },
      ],
      newPostText: 'bla-bla-bla',
    }
  },

  _callSubscriber() {

  },

  getState() {
    return this._state;
  },

  addPost() {
    let newPost = {
      message: this._state.postsPage.newPostText,
      likesCount: 0,
    };
    this._state.postsPage.postData.push(newPost);
    this._state.postsPage.newPostText = '';
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.postsPage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observ) {
    this._callSubscriber = observ;
  }
}



export default store;