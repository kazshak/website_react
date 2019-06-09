import React from 'react';

const MortgageRate = (props) => {
    
    let rates = require("../../rates.json");
    
    return(
        <div className="table-responsive" style={{fontFamily: "Tahoma, sans-serif"}}>
            <table className="table table-hover mb-1">
                <thead>
                    <tr className="table-secondary ">
                        <th scope="col" colSpan="2" style={{textAlign: "center", fontSize: "14px", paddingTop: "0", paddingBottom: "0"}}>
                            US Average Mortgage Rates
                        </th>
                    </tr>
                    <tr className="table-secondary ">
                        <th scope="col" colSpan="2" style={{textAlign: "center", fontSize: "10px", paddingTop: "0", paddingBottom: "0"}}>
                            <em>as of: {rates.MORTGAGE30US.date}</em>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" style={{textAlign: "center"}}>30 Year Fixed</th>
                        <td style={{textAlign: "left"}}>{rates.MORTGAGE30US.rate}</td>
                    </tr>
                    <tr>
                        <th scope="row" style={{textAlign: "center"}}>15 Year Fixed</th>
                        <td style={{textAlign: "left"}}>{rates.MORTGAGE15US.rate}</td>
                    </tr>
                    <tr>
                        <th scope="row" style={{textAlign: "center"}}>5 / 1 ARM</th>
                        <td style={{textAlign: "left"}}>{rates.MORTGAGE5US.rate}</td>
                    </tr>
                </tbody>
            </table>
            <p className="p-0 m-0" style={{fontSize: "6px"}}>
                Data is provided "as is," by Freddie Mac® with no warranties of any kind, express or implied<br />
                Copyright, 2016, Freddie Mac. Reprinted with permission.
            </p>
            
        </div>
    );
};

export default MortgageRate;