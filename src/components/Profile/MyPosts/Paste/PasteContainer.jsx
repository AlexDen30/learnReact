import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../../redux/posts-reducer';
import Paste from './Paste';



let mapStateToProps = (state) => {
  return {
      
  }
}


let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => {
      dispatch(addPostActionCreator(post));
    }
  }
}

const PasteContainer = connect(mapStateToProps, mapDispatchToProps)(Paste);

export default PasteContainer;