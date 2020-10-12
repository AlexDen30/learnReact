import React from 'react';
import s from './Dialogs.module.css';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../FormsControls/FormsControls';
import { maxLengthCreator, requiredField } from '../../utils/validators/validators';

const maxLength100 = maxLengthCreator(100);

const AddDialogForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                component={Textarea}
                validate={[requiredField, maxLength100]}
                name='newDialogBody'
                placeholder='Enter your message: '
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const DialogsFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddDialogForm);

const Dialogs = (props) => {
    const onSubmit = (formData) => {
        props.sendMessage(formData.newDialogBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {props.dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{props.messagesElements}
                </div>
                <DialogsFormRedux onSubmit={onSubmit} />
            </div>
        </div>
    )
}
export default Dialogs;