import React from 'react';
import s from './Paste.module.css';

const Paste = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.enter}>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value ={props.newPostText} />
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
    </div>
  )
}

export default Paste;