import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import logo from './Logo_Big.gif';
import TopNavBar from './components/common/TopNavBar';
import Jumbotron from './components/common/Jumbotron';
import MiddleNavBar from './components/common/MiddleNavBar';
import Footer from './components/common/Footer';
import MainPage from './components/main_page/MainPage';
import FaqPage from './components/faq_page/FaqPage';
import AboutPage from './components/about_page/AboutPage';
import PricingPage from './components/pricing_page/PricingPage';
import PrepareToSellPage from './components/prepToSellPage/PrepareToSellPage';
import HowToBuyPage from './components/how_to_buy_page/HowToBuyPage';
import ContactPage from './components/contact_us_page/ContactPage';

function App() {
  return (
    <div className="container-fluid bg-secondary p-0">
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
          <Route exact
            path="/contactUs"
            render={() => <ContactPage logo={logo} />} />
        </div>
        <div className="col-lg-12 col-fluid p-5 bg-dark">
          <Footer logo={logo} />
        </div>
    </div>
  );
}

export default App;
