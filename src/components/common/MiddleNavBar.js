import React from 'react';
import { NavLink } from 'react-router-dom';

import './middleNavBar.css';

const MiddleNavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary" style={{marginTop: "0"}}>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#middleNavBar" aria-controls="middleNavBar" 
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="middleNavBar">
                <div className="mr-auto ml-auto">
                    <div className="btn-group">
                        <button className="btn btn-primary dropdown-toggle mr-2" type="button" id="selling" 
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Selling A House</button>
                        <div className="dropdown-menu bg-light" aria-labelledby="selling">
                            <NavLink to="/about" className="dropdown-item">Why choose us?</NavLink>
                            <NavLink to="/pricing" className="dropdown-item">Pricing Options</NavLink>
                            <NavLink to="/HowMuchIsMyHomeWorth" className="dropdown-item">What's the value of your home?</NavLink>
                            <NavLink to="/prepareToSell" className="dropdown-item">Preparing to sell</NavLink>
                            <NavLink to="/contactUs" className="dropdown-item">Contact Us</NavLink>
                        </div>
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-primary dropdown-toggle mr-2" type="button" id="buying" 
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Buying A House</button>
                        <div className="dropdown-menu bg-light" aria-labelledby="buying">
                            <NavLink to="/about" className="dropdown-item">Why choose us?</NavLink>
                            <NavLink to="/pricing" className="dropdown-item">Pricing Options</NavLink>
                            <NavLink to="/howToBuy" className="dropdown-item">How to buy a house</NavLink>
                            <NavLink to="/contactUs" className="dropdown-item">Contact Us</NavLink>
                        </div>
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-primary dropdown-toggle mr-2" type="button" id="search" 
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Search Properties</button>
                        <div className="dropdown-menu bg-light" aria-labelledby="search">
                            <NavLink to="/featured" className="dropdown-item">Featured Listings</NavLink>
                            <NavLink to="/searchTheMls" className="dropdown-item">Search The MLS</NavLink>
                        </div>
                    </div>
                    
                    <NavLink to="/faq">
                        <button className="btn btn-primary mr-2" type="button" href="#">FAQ</button>
                    </NavLink>
                    
                    <NavLink to="/contactUs">
                        <button className="btn btn-primary" type="button" href="#">Contact Us</button>
                    </NavLink>
                    
                </div>
            </div>
        </nav>
    );
};

export default MiddleNavBar;