import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {logoutThunkCreator} from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {

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
        logout: () => {
            return dispatch(logoutThunkCreator());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (HeaderContainer);