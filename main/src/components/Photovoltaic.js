import React from 'react';
import {NavLink} from "react-router-dom";
import Navigation from "./Navigation";

const photovoltatic = () => {
    return (
        <div>
            <h1>Photovoltaik</h1>


            <NavLink to="/">Home</NavLink> >
            <NavLink to="/NER">NER</NavLink> >
            <NavLink to="/NER/Photovoltaic">PV</NavLink>



            <Navigation/>



        </div>
    );
}

export default photovoltatic;