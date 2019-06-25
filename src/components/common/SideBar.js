import React from 'react';
import MortgageCalc from './MortgageCalc';

const SideBar = (props) => {
    return (
        <div className="col-lg-3 bg-white p-0 pr-2 pt-3">
            <img className="img-fluid ml-auto mr-auto" src={props.logo} alt="iList Realty"  />
            <p className="ml-3 mt-3" style={{lineHeight: "1.5rem", fontFamily: "Times New Roman"}}>
                <span style={{fontSize: "1.75rem"}}>Brenda Shakir<br /></span>
                Principal Broker / Owner<br />
                <span style={{fontSize: "1.75rem"}}>615.969.4118<br /></span>
                615.991.9809<br />
                615.827.0070 fax<br />
                <a href="mailto:bshakir@ilistrealty.net">bshakir@ilistrealty.net</a>
            </p>
            <MortgageCalc />
        </div>
    );
};

export default SideBar;
