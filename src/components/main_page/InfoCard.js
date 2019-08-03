import React from 'react';

import './InfoCard.css';

const InfoCard = (props) => {

    let body;

    if (props.contents.bullets) {
        body = 
            <>
                <h5 className="card-title"><strong>{props.contents.title}</strong></h5>
                    <ul>
                        {props.contents.bulletText.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
            </>
    } else if (props.contents.images) {
        body =
            <>
                <div className="row">
                {props.contents.imageList.map((item, index) => {
                    return (
                            <a key={index} className="col-sm-6 p-0 mt-auto mb-auto" href={item.link} target="_blank" rel="noopener noreferrer">
                                <img className="img-fluid p-2" src={item.image}  alt="iList Realty" />
                            </a>
                    );
                    })}
                </div>
            </>
    } else {body = props.contents.scrpt}

    console.log(body);

    return (
        // mr-0 ml-2 mt-3 p-0
        <div className="col-lg-6 card pr-1 pl-1 mt-3" style={{borderStyle: "none"}}>
            <div className="card-header text-center bg-primary pt-2" style={{height: "3rem"}}>
                <h6><strong>{props.header}</strong></h6>
            </div>
            <div className="card-body p-3">
                {body}
            </div>
        </div>
    );
};

export default InfoCard;
