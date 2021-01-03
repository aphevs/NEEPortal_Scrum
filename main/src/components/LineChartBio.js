import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
import data from '../data/hydroData.json';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dataPoints =[];


class LineChartBio extends Component {

    render() {
        const options = {
            theme: "light2",
            axisY: {
                title: "Total Kw",
                prefix: "Kw"
            },
            data: [{
                type: "line",
                xValueFormatString: "MMM YYYY",
                yValueFormatString: "$#,##0.00",
                dataPoints: dataPoints
            }]
        }
        return (
            <div>
                <CanvasJSChart options = {options}
                               onRef={ref => this.chart = ref}
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }

    componentDidMount(){
        var chart = this.chart;
        var dataToUse = data;
        for (var i = 0; i < dataToUse.length; i++) {
            console.log("X"+dataToUse[i].x);
            dataPoints.push({
                x: new Date(dataToUse[i].x),
                y: dataToUse[i].y
            });
        }
        chart.render();
    }

}

export default LineChartBio;