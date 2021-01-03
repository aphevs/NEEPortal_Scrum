import React from 'react';
import {NavLink} from "react-router-dom";
import Navigation from "./Navigation";
import '../App.css';
import LineChartWindturbineRealData from "./LineChartWindturbineRealData";

const windturbine = () => {
    return (
        <div>
            <h1 className="Title" >Windmachine</h1>
            <NavLink to="/">Home</NavLink> >
            <NavLink to="/NER">NER</NavLink> >
            <NavLink to="/NER/Windmachine">Windmachine</NavLink>
            <LineChartWindturbineRealData/>
            <Navigation/>
        </div>
    );
}

export default windturbine;