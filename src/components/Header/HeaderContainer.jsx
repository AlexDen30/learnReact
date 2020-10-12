import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {logoutThunkCreator, setAuthUserDataThunkCreator } from '../../redux/auth-reducer'

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
        },

        logout: () => {
            return dispatch(logoutThunkCreator());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (HeaderContainer);