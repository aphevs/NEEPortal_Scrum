import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
import data from '../data/Windturbine.json';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints =[];

class LineChartWindturbine extends Component {

    render() {
        const options = {
            theme: "light2",
            title: {
                text: "WindMachine"
            },
            axisY: {
                title: "Daily total",
                prefix: "kW/h"
            },
            data: [{
                type: "line",
                dataPoints: dataPoints
            }]
        }
        return (
            <div>
                <CanvasJSChart options = {options}
                               onRef={ref => this.chart = ref}
                />
            </div>
        );
    }

    componentDidMount()
    {
        var chart = this.chart;
        var dataToUse = data;
        for (var i = 0; i < dataToUse.length; i++) {
            dataPoints.push({
                x: new Date(dataToUse[i].Date),
                y: dataToUse[i].DailyTotal
            });
        }
        chart.render();
    }

}

export default LineChartWindturbine;