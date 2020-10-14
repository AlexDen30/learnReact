import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/login'
import {logoutThunkCreator, setAuthUserDataThunkCreator } from './redux/auth-reducer'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeThunkCreator } from './redux/app-reducer';
import Loader from './components/Loader/Loader';


class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Loader/>
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs'
            render={() =>
              <DialogsContainer />}
          />

          <Route path='/profile/:userId?'
            render={() =>
              <ProfileContainer />}
          />

          <Route path='/users'
            render={() =>
              <UsersContainer />}
          />

          <Route path='/login'
            render={() =>
              <LoginPage />}
          />
        </div>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
      initializeApp: () => {
          return dispatch(initializeThunkCreator());
      },
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
) (App)

