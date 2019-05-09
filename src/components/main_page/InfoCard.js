import React from 'react';

import './InfoCard.css';

const InfoCard = (props) => {
    let body;

    if (props.contents.bullets) {
        body = 
            <>
                <h5 className="card-title"><strong>{props.contents.title}</strong></h5>
                    <ul>
                        {props.contents.bulletText.map(item => {
                        return <li >{item}</li>;
                    })}
                </ul>
            </>
    } else if (props.contents.images) {
        body =
            <>
               {props.contents.imageList.map(item => {
                   return (
                        <a className="col-sm-6 p-0" href={item.link} target="_blank" rel="noopener noreferrer">
                            <img className="img-fluid p-2" src={item.image} width="125" alt="iList Realty" />
                        </a>
                   );
                })}
            </>
    };

    return (
        <div className="card mr-0 ml-2 mt-3 p-0" style={{width: "20rem"}}>
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
