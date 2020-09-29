import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../../redux/posts-reducer';
import s from './Paste.module.css';

const Paste = (props) => {

  let onPasteClick = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewPostActionCreator(text));
  }

  return (
    <div className={s.enter}>
      <div>
        <textarea
          value={props.newPostText}
          placeholder='Type something here'
          onChange={onPostChange}
        ></textarea>
      </div>
      <div>
        <button onClick={onPasteClick}>Paste</button>
      </div>
    </div>
  )
}

export default Paste;