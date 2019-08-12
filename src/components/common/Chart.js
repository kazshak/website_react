import React, { useState } from 'react';
import { FlexibleWidthXYPlot, XAxis, VerticalBarSeries, 
            MarkSeries} from 'react-vis';

import AnnualMortInfo from './AnnualMortInfo';

const Chart = (props) => {

    const [tooltip, setTooltip] =
        useState([{year: 0, prin: 0, interest: 0, taxAndIns: 0, balance: 0}])

    const getData = (data, component) => {
        let temp = [];
        if (data) {
            temp = data.map(item => {
                return({x: item["year"], y: item[component]});
            });
        }
        return(temp);
    };

    const MARGIN = {
        left: 10,
        right: 10,
        bottom: 80,
        top: 20
    }

    let maxBal = 0;
    let maxPmt = 0;
    let myData = [{}];
    if (props.data) {
        maxBal = props.data[0]["balance"] * 1.1;
        maxPmt = (props.data[2]["prin"] + props.data[2]["interest"] + props.data[2]["taxAndIns"]) * 1.1;
        myData = props.data;
    }

    return(
        <div className="col-12">
        <FlexibleWidthXYPlot margin={MARGIN} height={450} xType="ordinal" stackBy="y" >
            <XAxis tickLabelAngle={-90} />
            <VerticalBarSeries data={getData(props.data, "prin")} yDomain={[0,maxPmt]} 
                    onValueMouseOver = {(d, e) => {
                        setTooltip(myData.filter(item => item.year === d.x));
                    }}
            />
            <VerticalBarSeries data={getData(props.data, "interest")} yDomain={[0,maxPmt]} 
                    onValueMouseOver = {(d, e) => {
                        setTooltip(myData.filter(item => item.year === d.x));
                    }}
            />
            <VerticalBarSeries data={getData(props.data, "taxAndIns")} yDomain={[0,maxPmt]} 
                    onValueMouseOver = {(d, e) => {
                        setTooltip(myData.filter(item => item.year === d.x));
                    }}
            />
            <MarkSeries data={getData(props.data, "balance")} color={"red"} strokeWidth={5} yDomain={[0,maxBal]} 
                    onValueMouseOver = {(d, e) => {
                        setTooltip(myData.filter(item => item.year === d.x));
                        console.log(tooltip);
                    }}
            />
        </FlexibleWidthXYPlot>
        <AnnualMortInfo data={tooltip} />
        </div>
    )

};

export default Chart;