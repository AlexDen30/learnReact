import React from 'react';
import Post from './Post/Post'
import s from './MyPosts.module.css';
import Paste from './Paste/Paste';
import store from '../../../redux/state';
import PasteContainer from './Paste/PasteContainer';




const MyPosts = (props) => {

  return (
    <div>
      My Posts
      <PasteContainer/>
      <div className={s.posts}>
        {props.postElements}
      </div>
    </div>
  )
}

export default MyPosts;