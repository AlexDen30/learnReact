const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEWPOST-TEXT';

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  }
}


export const updateNewPostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  }
}

let initialState = {

  postData: [
    { message: 'Hello, everyone!', likesCount: 10 },
    { message: 'Hi, dude', likesCount: 5 },
  ],
  newPostText: '',
}

const postsReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_POST: {
      let newPost = {
        message: state.newPostText,
        likesCount: 0,
      }

      return {
        ...state,
        newPostText: '',
        postData: [...state.postData, newPost]
      }

    }

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      }
    }

    default:
      return state;
  }

}

export default postsReducer;