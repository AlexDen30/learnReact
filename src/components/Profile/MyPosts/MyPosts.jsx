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
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
        newPostText={props.newPostText} />
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;