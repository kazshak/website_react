import React from 'react';

import './HomeValue.css';

const HowMuchIsMyHomeWorth = (props) => {
    return(
        <div className="container-fluid row p-0 m-0">
            <iframe src="https://www.zillow.com/how-much-is-my-home-worth/" title="HowMuchIsMyHomeWorth"></iframe>
        </div>
    )
}

export default HowMuchIsMyHomeWorth;