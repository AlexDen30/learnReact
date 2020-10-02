import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';



function App(props) {

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs'
          render={() =>
            <DialogsContainer />}
        />
        <Route path='/profile'
          render={() =>
            <Profile />}
        />
      </div>
    </div>
  );
}

export default App;
