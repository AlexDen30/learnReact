import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShb2aDlCxFJpcEiwLyS0NwFjwAfSnMoig1DQ&usqp=CAU'></img>
        {props.msg}
      </div>
      <div className={s.item}>
        {props.likes}
      </div>
    </div>
  )
}

export default Post;