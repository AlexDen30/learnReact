import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer'
import { authAPI } from '../../api/api';

class HeaderContainer extends React.Component {

    componentDidMount() {
        authAPI.getUser()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setAuthUserData(data.data.id, data.data.email, data.data.login )
                }   
            });
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

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);