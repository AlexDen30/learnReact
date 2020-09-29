import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import store from './redux/state';



function App(props) {

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs'
          render={() =>
            <Dialogs
              dialogsData={props.state.dialogsPage.dialogsData}
              messagesData={props.state.dialogsPage.messagesData}
              newMessageBody={props.state.dialogsPage.newMessageBody}
              dispatch={props.dispatch} />} />
        <Route path='/profile'
          render={() =>
            <Profile
              posts={props.state.postsPage.postData}
              newPostText={props.state.postsPage.newPostText}
              dispatch={props.dispatch}
              />} />
      </div>
    </div>
  );
}

export default App;
