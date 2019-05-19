import React from 'react';
import FaqSection from '';
import LeftSideBar from './SideBar';

const FaqPage = (props) => {
    return (
        <div className="container-fluid row p-0 m-0">
            <LeftSideBar logo={props.logo} />
            <FaqSection />
        </div>
    );
};

export default FaqPage;