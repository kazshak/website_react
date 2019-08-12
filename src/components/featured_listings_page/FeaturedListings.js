import React, { useEffect, useState } from 'react';

import PropCard from './PropCard';

import './FeaturedListings.css';

const FeaturedListings = (props) => {

    const [files, setFiles] = useState({
        "directory": []
    });
    const [directoryLoaded, setDirectoryLoaded] = useState(false);
    const [propListLoaded, setPropListLoaded] = useState(0);
    const [propListRqst, setPropListRqst] = useState(false);
    const [propList, setPropList] = useState([{}]);

    let temp = [];

    useEffect(() => {
        const getPropDesc = async (dir, idx) => {
            const response = await fetch('FeaturedProperties/' + dir + '/desc.json');
            const values = await response.json();
            temp.push(values);
            if (temp.length === files["directory"].length) {
                setPropList(temp);
            }
            setPropListLoaded(idx);
         };

        const getDirectory = async () => {
            const response = await fetch('FeaturedProperties/properties.json');
            const values = await response.json();
            setFiles(values);
            setDirectoryLoaded(true);
        };

        if (!directoryLoaded) {
            getDirectory();
            
        };

        if (directoryLoaded && !propListRqst) {
            let a = files["directory"].map((d, i) => getPropDesc(d, i));
            setPropListRqst(true);
        };
        
    }, [files, directoryLoaded, propList, propListLoaded, propListRqst]);

    if (directoryLoaded) {
        if (propList.length === files["directory"].length) {
            console.log('Hello');
            console.log(directoryLoaded, propListRqst, propListLoaded);
            console.log(files);
            console.log(propList);
            console.log(temp);
        };
    };

    return(
        <div className="container-fluid row p-2 m-0 bg-white">
                {propList.map((item, idx) => {
                    return(
                        <PropCard selectedProperty={item} directory={files["directory"][idx]} />
                    );
                })}
        </div>
    );
};

export default FeaturedListings;
