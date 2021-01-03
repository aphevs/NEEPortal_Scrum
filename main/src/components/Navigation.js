import React from 'react';
import '../App.css';
import './Navigation.css';
import pv from "../images/PV.png";
import minihydr from "../images/minihydr.png";
import windmachine from "../images/windmachine.png";
import biogas from "../images/biogas.png";

const Navigation = () => {


    return (

        <>

            <h3>Neue EE</h3>
            <div class="square-box">

                <div className='square content'>

                    <button className="but"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'http://localhost:3000/NER/Photovoltaic';
                            }}>
                        <img src={pv}/>
                    </button>

                </div>



                <div class='square content'>

                    <button class="but"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'http://localhost:3000/NER/MiniHydraulic';
                            }}>
                        <img src={minihydr}/>
                    </button>

                </div>

                <div class='square content'>

                    <button className="but"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'http://localhost:3000/NER/Windturbine';
                            }}>
                        <img src={windmachine}/>
                    </button>

                </div>
                <div class='square content'>

                    <button className="but"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'http://localhost:3000/NER/Biogas';
                            }}>
                        <img src={biogas}/>
                    </button >

                </div>


            </div>

        </>
    );
}

export default Navigation;