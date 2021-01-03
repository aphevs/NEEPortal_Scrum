import React from 'react';
import {NavLink} from "react-router-dom";
import '../App.css';


const privateinstallation = () => {
    return (
        <div>
            <h1 className="Title">Meine private Installation eingeben</h1>


            <NavLink to="/">Home</NavLink> >
            <NavLink to="/PrivateInstallation">Private Installation</NavLink>


        <h2>make the different tabs here</h2>

        </div>
    );
}

export default privateinstallation;