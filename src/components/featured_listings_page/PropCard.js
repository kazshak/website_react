import React from 'react';

const PropCard = (props) => {

    const prop = props.selectedProperty;
    const loc = props.directory;

    const frontImage = 'FeaturedProperties/' + loc + '/' + prop.frontImage;
    
    const price = 
        prop.price
        
    return(
        <div className="col-lg-4 card pr-1 pl-1 mt-3" style={{borderStyle: "none"}}>
            <div className="card-header text-center bg-dark pt-2" style={{height: "3rem"}}>
                <h6><strong>{prop.address}</strong></h6>
            </div>
            <div className="card-body pl-3 pr-3 pt-1 pb-0" style={{height: "12rem"}}>
                <div className="row" style={{height: "100%"}}>
                    <div className="col-sm-6 p-0">
                        <img className="img-responsive p-2" src={frontImage} height="100%" width="100%" />
                    </div>
                    <div className="col-sm-6 mt-4 text-center">
                        <strong style={{fontSize: "1.25rem"}}>
                            {price}
                        </strong><br /><br />
                        {prop.sqft} sq. ft.<br />
                        {prop.beds} bedrooms<br />
                        {prop.baths} baths<br />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropCard;