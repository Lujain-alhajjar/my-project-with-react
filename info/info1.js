import React from "react";
import Infoa from './info2/infoa';
import './info1.css'
function Info1(){
    return(
        <div>
            <div className="info1">
                <h2>A MODERN, FULL-SERVICE PHARMACY</h2>
                <p>
                At Medicine Center Compounding Pharmacy, we believe health is not just the absence of disease, but a state of immense vitality. It is our mission to help you feel better, live longer, and become the best possible you!
                </p>
            </div>
            <Infoa />
        </div>
    );
}

export default Info1;