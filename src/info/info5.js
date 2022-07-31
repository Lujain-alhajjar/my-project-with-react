import React from "react";
import img from './img/global.png';
import './info5.css';
function Info5(){
    return(
        <div className="info5">
            <h2>GLOBAL PRESENCE</h2>
            <p>
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
            </p>
            <img src={img} alt="" />
        </div>
    );
}

export default Info5;