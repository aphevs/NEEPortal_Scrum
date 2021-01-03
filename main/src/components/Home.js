import React from 'react';
import {NavLink} from "react-router-dom";
import '../App.css';

const home = () => {


    return (
        <div>
            <h1 className="Title">Portal der neue erneuerbaren Energien in Wallis</h1>
            <NavLink to="/NER"><button type={"button"}>NER</button></NavLink>

        </div>
    );
}

export default home;