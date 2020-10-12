import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

export const addPostActionCreator = (post) => {
  return {
    type: ADD_POST,
    newPostText: post
  }
}


export const setUserProfileActionCreator = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile: profile, 
  }
}

export const setStatusActionCreator = (status) => {
  return {
    type: SET_STATUS,
    status: status, 
  }
}

let initialState = {

  postData: [
    { message: 'Hello, everyone!', likesCount: 10 },
    { message: 'Hi, dude', likesCount: 5 },
  ],
  profile: null,
  status: '',
}

const postsReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_POST: {
      let newPost = {
        message: action.newPostText,
        likesCount: 0,
      }

      return {
        ...state,
        postData: [...state.postData, newPost]
      }

    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      }
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      }
    }
    
    default:
      return state;
  }

}

export const setUserProfileThunkCreator = (userId) => {
  return (dispatch) => {
    profileAPI.getUser(userId)
      .then(data => {
        dispatch(setUserProfileActionCreator(data));
      });
  }
} 

export const getStatusThunkCreator = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
      .then(response => {
        dispatch(setStatusActionCreator(response.data));
      });
  }
} 

export const updateStatusThunkCreator = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setStatusActionCreator(status));
        }        
      });
  }
} 

export default postsReducer;