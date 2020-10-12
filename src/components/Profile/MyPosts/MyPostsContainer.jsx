import React from 'react';
import Post from './Post/Post'
import s from './MyPosts.module.css';
import Paste from './Paste/Paste';
import store from '../../../redux/state';
import PasteContainer from './Paste/PasteContainer';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';



let mapStateToProps = (state) => {
  return {
      postElements: state.postsPage.postData.map((post) =>
      <Post msg={post.message} likes={post.likesCount} />),
  }
}


let mapDispatchToProps = (dispatch) => {
  return {
  
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;