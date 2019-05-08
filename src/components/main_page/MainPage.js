import React from 'react';
import BodySection from './BodySection';
import RightSideBar from './RightSideBar';

const MainPage = (props) => {
    return (
        <div class="container-fluid row p-0 m-0">
            <BodySection />
            <RightSideBar logo={props.logo} />
        </div>
    );
};

export default MainPage;
