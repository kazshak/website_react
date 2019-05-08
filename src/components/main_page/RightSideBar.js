import React from 'react';


const RightSideBar = (props) => {
    return (
        <div className="col-lg-3 bg-white p-0 pt-3">
            <img src={props.logo} alt="iList Realty" height="125" />
        </div>
    );
};

export default RightSideBar;
