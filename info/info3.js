import React from "react";
import './info3.css';
import img from './img/img.jpeg'
function Info3(){
    return(
        <div className="info3">
            <div className="left">
                <img src={img} alt="" />
            </div>
            <div className="right">
                <h2>CARE OF HEART</h2>
                <p>
                For nearly 25 years, thousands of medical practitioners throughout the state of Utah have exclusively referred patients to Medicine Center Compounding Pharmacyfor their compounded medications. This is due to the combination of outstanding service, price, and quality. At Medicine Center, quality is paramount. For that reason, we use cutting edge technology, state-of-the-art equipment, innovative bases and some of the most unique dosage forms our industry has to offer.
                </p>
                
            </div>
        </div>
    );
}
export default Info3;