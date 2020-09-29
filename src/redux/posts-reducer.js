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

const postsReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            debugger;
            let body = state.newPostText;
            state.postData.push({
                message: body,
                likesCount: 0,
            });
            state.newPostText = '';
            break;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;

        default:
            return state;
    }

    return state;
}

export default postsReducer;