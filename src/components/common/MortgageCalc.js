import React, { useState } from "react";
import $ from "jquery";

import "./MortgageCalc.css";

const MortgageCalc = props => {
  const [params, setParams] = 
    useState({
        purcasePrice: 500000,
        downPayment: 20,
        term: 30,
        intRate: 4.5,
        propertyTax: 3300,
        propertyIns: 2500,
        firstPayMonth: 1,
        firstPayYear: 2020,
        monthlyPandi: 0
    });

  const calcPayment = values => {
    let periodicInterest = values.intRate / 100 / 12;
    let nPeriods = values.term * 12;
    let loanAmt = values.purcasePrice * (1 - values.downPayment / 100);
    let annuityFactor =
      periodicInterest / (1 - Math.pow(1 + periodicInterest, -nPeriods));
    return Math.round(loanAmt * annuityFactor * 100) / 100;
  };

  const calcAmortization = payment => {
    let temp = JSON.parse(JSON.stringify(params));
    let nYrs;
    let fv;
    let pv = temp.purcasePrice * (1 - temp.downPayment / 100);
    let periodicInterest = temp.intRate / 100 / 12;

    if (temp.firstPayMonth > 1) {
      nYrs = temp.term + 1;
    } else {
      nYrs = temp.term;
    };

    return(
      Array(nYrs).fill({}).map((_, idx) => {
        let nPmts;
        if (idx === 0) {
          nPmts = 12 - temp.firstPayMonth + 1
        } else if (idx === temp.term) {
          nPmts = temp.firstPayMonth - 1;
        } else {nPmts = 12;};

        fv = pv * Math.pow(1 + periodicInterest, nPmts) - payment * ((Math.pow(1+periodicInterest, nPmts) - 1) / periodicInterest);
        fv = Math.round(fv * 100) / 100;
        let prin = Math.round((pv - fv) * 100) / 100;
        let interest = payment * nPmts - prin;
        pv = fv;
        return({'year': temp.firstPayYear + idx,
                'prin': prin,
                'interest': interest,
                'taxAndIns': Math.round(((temp.propertyTax + temp.propertyIns) / 12 * nPmts) * 100) / 100,
                'balance': fv});
      })
    );
  };

  const handleChange = event => {
    let temp = JSON.parse(JSON.stringify(params));
    temp[event.target.id] = parseFloat(event.target.value);
    setParams(temp);
  };

  const handleSubmit = event => {
    let temp = JSON.parse(JSON.stringify(params));
    temp["monthlyPandi"] = calcPayment(temp);
    temp["amortization"] = calcAmortization(temp.monthlyPandi);
    setParams(temp);
    console.log(params);
    console.log(temp);
    $("#myModal").modal();
    event.preventDefault();
  };

  return (
    <div className="mortgageCalc ml-4">
      <strong style={{ fontSize: "14px", marginLeft: "5px" }}>
        Mortgage Calculator
      </strong>
      <form style={{ fontSize: "12px" }} onSubmit={handleSubmit}>
        <div className="form-group row">
          <label className="col-form-label">Purchase price ($): </label>
          <input type="number" className="form-control" id="purchasePrice" placeholder={params.purcasePrice}
            onChange={handleChange} />
        </div>
        <div className="form-group row">
          <label className="col-form-label">Down payment (%): </label>
          <input type="number" className="form-control" id="downPayment" placeholder={params.downPayment}
            onChange={handleChange} />
        </div>
        <div className="form-group row">
          <label className="col-form-label">Mortgage term (years): </label>
          <input type="number" className="form-control" id="term" placeholder={params.term}
            onChange={handleChange} />
        </div>
        <div className="form-group row">
          <label className="col-form-label">Interest rate (%): </label>
          <input type="number" step="0.01" className="form-control" id="intRate" placeholder={params.intRate}
            onChange={handleChange} />
        </div>
        <div className="form-group row">
          <label className="col-form-label">Property tax ($): </label>
          <input type="number" className="form-control" id="propertyTax" placeholder={params.propertyTax}
            onChange={handleChange} />
        </div>
        <div className="form-group row">
          <label className="col-form-label">Property insurance ($): </label>
          <input type="number" className="form-control" id="propertyIns" placeholder={params.propertyIns}
            onChange={handleChange} />
        </div>
        <div className="form-group row mb-3">
          <label className="col-form-label">First payment date: </label>
          <select className="form-control" id="firstPayMonth" 
            onChange={handleChange}>
            <option value="1" selected>Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
          <input type="number" className="form-control" id="firstPayYear" placeholder={params.firstPayYear}
            onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary mb-2 ml-4">Calculate</button>
      </form>
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modal Heading</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              Principal & Interest:{" "}
              {params.monthlyPandi.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
              })}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalc;
