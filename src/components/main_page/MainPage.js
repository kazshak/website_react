import React from 'react';
import BodySection from './BodySection';
import RightSideBar from '../common/SideBar';

const MainPage = (props) => {
    return (
        <div className="container-fluid row p-0 m-0">
            <BodySection />
            <RightSideBar logo={props.logo} />

        </div>
    );
};

export default MainPage;
