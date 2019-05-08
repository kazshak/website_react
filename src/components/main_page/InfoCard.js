import React from 'react';
import bullet from './bullet2.gif';

import './InfoCard.css';

const InfoCard = (props) => {
    let bulletImg = `url(${bullet})`;

    return (
        <div className="card mr-0 ml-2 mt-3 p-0" style={{width: "20rem"}}>
            <div className="card-header text-center bg-primary pt-2" style={{height: "3rem"}}>
                <h5><strong>{props.header}</strong></h5>
            </div>
            <div className="card-body mt-auto mb-auto p-3">
                <h5 className="card-title"><strong>{props.title}</strong></h5>
                <ul style={{listStyleImage: bulletImg}}>
                    {props.bullets.map(item => {
                        return <li >{item}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default InfoCard;
