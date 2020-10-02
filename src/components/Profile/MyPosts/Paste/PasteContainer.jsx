import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../../redux/posts-reducer';
import MyPosts from '../MyPosts';
import Paste from './Paste';



let mapStateToProps = (state) => {
  return {
      newPostText: state.postsPage.newPostText,
  }
}


let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPost: (text) => {
      dispatch(updateNewPostActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const PasteContainer = connect(mapStateToProps, mapDispatchToProps)(Paste);

export default PasteContainer;