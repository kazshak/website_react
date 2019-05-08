import React from 'react';


const TopNavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"><img src={props.logo} alt="iList Realty" height="75"></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#topNavBar" aria-controls="topNavBar" 
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse nav-pills" id="topNavBar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">FAQ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing Options</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Featured Listings</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default TopNavBar;

