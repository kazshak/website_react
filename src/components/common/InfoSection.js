import React from 'react';

import './InfoSection.css';

const InfoSection = (props) => {
    return (
        <div className="col-lg-9 bg-white p-5">
            {props.text}
        </div>
    );
};

export default InfoSection;