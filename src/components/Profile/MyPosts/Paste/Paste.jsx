import React from 'react';
import s from './Paste.module.css';
import { reduxForm, Field } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../../../utils/validators/validators';
import { Textarea } from '../../../FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {

  return (
    <form className={s.enter} onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate = {[requiredField, maxLength10]}
          component={Textarea}
          name='newPostBody'
          placeholder='Type something here'
        />
      </div>
      <div>
        <button>Paste</button>
      </div>
    </form>
  )
}

const AddPostFormRedux = reduxForm({ form: 'postAddMessageForm' })(AddPostForm);

const Paste = (props) => {
  const onSubmit = (formData) => {
    props.addPost(formData.newPostBody);
  }

  return (
    <AddPostFormRedux onSubmit={onSubmit} />
  )
}

export default Paste;