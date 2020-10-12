import React from 'react';
import s from './formsControls.module.css';

const FormsController = ({input, meta, child, ...props}) => {

    const hasError = meta.error && meta.touched;

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{'errrr'}</span>}
            
        </div>
    )
} 

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormsController {...props}><textarea {...input} {...restProps} /></FormsController>
} 

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormsController {...props}><input {...input} {...restProps} /></FormsController>
} 