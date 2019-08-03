import React from 'react';

const AnnualMortInfo = (props) => {

    let message = '';
    let values = props.data[0];
    if (values["year"] !== 0) {
        message =
            <div className="container col-8">
                Year: {values["year"]} <br />
                Principal paid: {values["prin"].toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
              })} <br />
                Interest paid:  {values["interest"].toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
              })} <br />
                Taxes & Insurance Paid: {values["taxAndIns"].toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
              })} <br />
                Balance at end of year: {values["balance"].toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
              })}
            </div>;
        
    };

    return(
        message
    );
};

export default AnnualMortInfo;
