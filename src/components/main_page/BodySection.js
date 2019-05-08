import React from 'react';
import InfoCard from './InfoCard';

const BodySection = (props) => {
    let fullService = ["1.5% of sales price at closing", "Comprehensive pricing analysis",
                    "Up to 30 color photos", "Listed in Featured Listings", "Lockbox provided", "iList Realty For Sale sign"];
    let flatFee = ["List your property for up to 6 months", "30 color photos (or max allowed by MLS)", "iList Realty For Sale sign",
                    "Realtor's lockbox"]

    return (
        <div className="col-lg-9 bg-white">
            <div className="row">
                <InfoCard header="FULL SERVICE LISTING" title="No up-front fee" bullets={fullService} />
                <InfoCard header="MLS FLAT FEE LISTING" title="$499 Up-Front Fee Only" bullets={flatFee} />
            </div>
        </div>
    );
};

export default BodySection;