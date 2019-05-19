import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import logo from './Logo_Big.gif';
import TopNavBar from './components/common/TopNavBar';
import Jumbotron from './components/common/Jumbotron';
import MiddleNavBar from './components/common/MiddleNavBar';
import MainPage from './components/main_page/MainPage';
import FaqPage from './components/faq_page/FaqPage';
import AboutPage from './components/about_page/AboutPage';
import PricingPage from './components/pricing_page/PricingPage';
import PrepareToSellPage from './components/prepToSellPage/PrepareToSellPage';
import HowToBuyPage from './components/how_to_buy_page/HowToBuyPage';

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
          <Route exact
            path="/about"
            render={() => <AboutPage logo={logo} />} />
          <Route exact
            path="/pricing"
            render={() => <PricingPage logo={logo} />} />
          <Route exact
            path="/prepareToSell"
            render={() => <PrepareToSellPage logo={logo} />} />
          <Route exact
            path="/howToBuy"
            render={() => <HowToBuyPage logo={logo} />} />

        </div>
    </div>
  );
}

export default App;
