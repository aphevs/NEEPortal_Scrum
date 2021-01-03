import React from 'react';
import {NavLink} from "react-router-dom";
import Navigation from "./Navigation";
import '../App.css';
import LineChartBio from "./LineChartBio";

const biogas = () => {
    return (
        <div>
            <h1 className="Title">Biogas</h1>

            <NavLink to="/">Home</NavLink> >
            <NavLink to="/NER">NER</NavLink> >
            <NavLink to="/NER/Biogas">Biogas</NavLink>

            <LineChartBio/>

            <Navigation/>
        </div>
    );
}

export default biogas;