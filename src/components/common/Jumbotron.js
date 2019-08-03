import React from 'react';
import header from './header2.gif';

const Jumbotron = (props) => {
    return (
        <div className="jumbotron jumbotron-fluid p-0" style={{overflow: "hidden", marginBottom: "0"}}>
            <img src={header} alt="" width="100%" height="100%" style={{marginTop: "-0.5rem", marginBottom: "-0.25rem"}} ></img>
        </div>
    )

};

export default Jumbotron;