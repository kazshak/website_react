import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Footer = (props) => {
    const activeStyle = { color: "white" };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <Link to="/" className="navbar-brand"><img src={props.logo} alt="iList Realty" height="75"></img></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#topNavBar" aria-controls="topNavBar" 
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse nav-pills" id="topNavBar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <NavLink to="/" className="nav-link" activeStyle={activeStyle} exact>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/faq" className="nav-link" activeStyle={activeStyle}>FAQ</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link" activeStyle={activeStyle}>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/pricing" className="nav-link" activeStyle={activeStyle}>Pricing Options</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/featured" className="nav-link" activeStyle={activeStyle}>Featured Listings</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Footer;

