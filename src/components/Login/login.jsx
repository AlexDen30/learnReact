import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { requiredField } from '../../utils/validators/validators';
import { Input } from '../FormsControls/FormsControls';
import { loginThunkCreator } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom';
import s from '../../components/FormsControls/formsControls.module.css'

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"}
                    name={"email"}
                    component={Input}
                    validate={[requiredField]}
                />
            </div>
            <div>
                <Field placeholder={"Password"}
                    name={"password"}
                    component={Input}
                    validate={[requiredField]}
                    type={"password"}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    name={"rememberMe"}
                    type={"checkbox"}
                />remember me
            </div>
            { props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password, rememberMe) => {
            dispatch(loginThunkCreator(email, password, rememberMe));
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);