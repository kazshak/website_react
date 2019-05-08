import React from 'react';
import './App.css';
import logo from './Logo_Big.gif';
import TopNavBar from './components/TopNavBar';
import Jumbotron from './components/Jumbotron';
import MiddleNavBar from './components/MiddleNavBar';
import MainPage from './components/main_page/MainPage';

function App() {
  return (
    <div className="container-fluid bg-secondary">
        <div className="col-lg-8 offset-lg-2 col-fluid">
          <TopNavBar logo={logo} />
          <Jumbotron />
          <MiddleNavBar />
          <MainPage logo={logo} />
        </div>
    </div>
  );
}

export default App;
