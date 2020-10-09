const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEWPOST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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

export const setUserProfileActionCreator = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile: profile, 
  }
}

let initialState = {

  postData: [
    { message: 'Hello, everyone!', likesCount: 10 },
    { message: 'Hi, dude', likesCount: 5 },
  ],
  newPostText: '',
  profile: null,
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

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      }
    }
    
    default:
      return state;
  }

}

export default postsReducer;