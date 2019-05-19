import React from 'react';
import Script from 'react-load-script';
import jQuery from 'jquery';

const MortgageRate = (props) => {
    
    const handleCreate = () => {
        
        console.log('Created');
    };

    const handleError = () => {
        
        console.log('Error');
    };

    const handleLoad = () => {
        
        console.log('Loaded');
    };

    const mlcalc_jquery_noconflict = 1;

    return(
        <div 
            style={{fontWeight: "normal", fontSize: "9px", fontFamily: "Tahoma", padding: "0", margin: "0", border: "0", background: "transparent",
                    color: "#E5E5E5", width: "300px", textAlign: "right", paddingRight: "10px"}} 
            id='mlcalcRatesWidgetHolderXX'>
            
            <Script url="https://www.mlcalc.com/mortgage-rates/widget-wide.js" 
                    onCreate={handleCreate} onError={handleError} onLoad={handleLoad} />
            Powered by <a href='https://www.mlcalc.com/mortgage-rates/' style={{color: "#E5E5E5", textDecoration: "none"}}>Mortgage Rates</a>
            
        </div>
    );
};

export default MortgageRate;