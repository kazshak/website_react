import React from 'react';
import './App.css';
import TopNavBar from './components/TopNavBar';
import Jumbotron from './components/Jumbotron';
import MiddleNavBar from './components/MiddleNavBar';

function App() {
  return (
    <div className="container-fluid bg-secondary">
        <div className="col-lg-8 offset-lg-2 col-fluid">
          <TopNavBar />
          <Jumbotron />
          <MiddleNavBar />
        </div>
    </div>
  );
}

export default App;
