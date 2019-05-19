import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import logo from './Logo_Big.gif';
import TopNavBar from './components/TopNavBar';
import Jumbotron from './components/Jumbotron';
import MiddleNavBar from './components/MiddleNavBar';
import MainPage from './components/main_page/MainPage';
import FaqPage from './components/FaqPage/FaqPage';

function App() {
  return (
    <div className="container-fluid bg-secondary">
        <div className="col-lg-8 offset-lg-2 col-fluid">
          <TopNavBar logo={logo} />
          <Jumbotron />
          <MiddleNavBar />
          <Route exact 
            path="/" 
            render={() => <MainPage logo={logo} />} />
          <Route exact
            path="/faq"
            render={() => <FaqPage logo={logo} />} />
          
        </div>
    </div>
  );
}

export default App;
