import React from 'react';
import {NavLink} from "react-router-dom";
import Navigation from "./Navigation";
import '../App.css';
import LineChartMiniHyd from "./LineChartMiniHyd";

const minihydraulic = () => {
    return (
        <div>
            <h1 className="Title">Mini-Hydraulish</h1>

            <NavLink to="/">Home</NavLink> >
            <NavLink to="/NER">NER</NavLink> >
            <NavLink to="/NER/MiniHydraulic">Mini-Hydraulisch</NavLink>

            <LineChartMiniHyd/>

            <Navigation/>

        </div>
    );
}

export default minihydraulic;