import React from 'react';
import Post from './Post/Post'
import s from './MyPosts.module.css';
import Paste from './Paste/Paste';
import store from '../../../redux/state';




const MyPosts = (props) => {

  let postElements = props.posts.map((post) =>
    <Post msg={post.message} likes={post.likesCount} />
  )

  return (
    <div>
      My Posts
      <Paste
        newPostText={props.newPostText}
        dispatch={props.dispatch}
      />
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;