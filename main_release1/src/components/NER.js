import React from 'react';
import {NavLink} from "react-router-dom";
import Navigation from "./Navigation";
import '../App.css';
import './NER.css';
import Icon from "@material-ui/core/Icon";
import AddBoxOutlineIcon from '@material-ui/icons/AddBoxOutlined'

const ner = () => {
    return (
        <div>
            <h1 className="Title">Neue erneuerbaren Energien</h1>

            <NavLink to="/">Home</NavLink> >
            <NavLink to="/NER">NER</NavLink>

            <Navigation/>

            <span>Add my installation <button><AddBoxOutlineIcon/></button></span>
        </div>
    );
}

export default ner;