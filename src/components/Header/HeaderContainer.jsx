import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {setAuthUserDataThunkCreator } from '../../redux/auth-reducer'
import { authAPI } from '../../api/api';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setAuthUserData();
    }

    render () {
        return <Header {...this.props}/>
    }
 
}

let mapStateToProps = (state) => {
    return {
       isAuth: state.auth.isAuth,
       login: state.auth.login,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setAuthUserData: () => {
            return dispatch(setAuthUserDataThunkCreator());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (HeaderContainer);