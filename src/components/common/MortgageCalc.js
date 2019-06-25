import React, { useState } from 'react';

import './MortgageCalc.css';

const MortgageCalc = (props) => {

    const [params, setParams] = useState({
        "purcasePrice": 500000,
        "downPayment": 0.20,
        "term": 30,
        "intRate": 0.045,
        "propertyTax": 3300,
        "propertyIns": 2500,
        "firstPayMonth": 1,
        "firstPayYear": 2020
    });

    const handleChange = (event) => {
        let temp = params;
        temp[event.target.id] = event.target.value;
        setParams(temp);
    };

    const handleSubmit = (event) => {
        console.log(params);
        event.preventDefault();
    }

    return (
        <div className="mortgageCalc ml-4">
            <strong style={{ "fontSize": "14px", "marginLeft": "5px" }}>Mortgage Calculator</strong>
             <form style={{ "fontSize": "12px"}} onSubmit={handleSubmit}>
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
                    <input type="number" className="form-control" id="intRate" placeholder={params.intRate}
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
        </div>
    );

}

export default MortgageCalc;