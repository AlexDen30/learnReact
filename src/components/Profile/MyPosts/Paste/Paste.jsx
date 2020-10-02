import React from 'react';
import s from './Paste.module.css';

const Paste = (props) => {

  let onPasteClick = () => {
    props.addPost();  
  }

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPost(text); 
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