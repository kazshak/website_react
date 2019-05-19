import React from 'react';
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
                            <a className="dropdown-item" href="#">Why choose us?</a>
                            <a className="dropdown-item" href="#">Pricing Options</a>
                            <a className="dropdown-item" href="#">What's the value of your home?</a>
                            <a className="dropdown-item" href="#">Preparing to sell</a>
                            <a className="dropdown-item" href="#">Contact Us</a>
                        </div>
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-primary dropdown-toggle mr-2" type="button" id="buying" 
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Buying A House</button>
                        <div className="dropdown-menu bg-light" aria-labelledby="buying">
                            <a className="dropdown-item" href="#">Why choose us?</a>
                            <a className="dropdown-item" href="#">Pricing Options</a>
                            <a className="dropdown-item" href="#">How to buy a house</a>
                            <a className="dropdown-item" href="#">Contact Us</a>
                        </div>
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-primary dropdown-toggle mr-2" type="button" id="search" 
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Search Properties</button>
                        <div className="dropdown-menu bg-light" aria-labelledby="search">
                            <a className="dropdown-item" href="#">Featured Listings</a>
                            <a className="dropdown-item" href="#">Search The MLS</a>
                        </div>
                    </div>
                    
                    <button className="btn btn-primary mr-2" type="button" href="#">FAQ</button>
                    
                    
                    <button className="btn btn-primary" type="button" href="#">Contact Us</button>
                    
                </div>
            </div>
        </nav>
    );
};

export default MiddleNavBar;