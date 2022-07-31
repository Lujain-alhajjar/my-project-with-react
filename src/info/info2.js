import React from 'react';
import "./info2.css"

function Info2(){
    return(
        <div className="info2">
            <div className="text">
                <h2>OUR DEPARTMENT</h2>
                <p>
                    Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                </p>
            </div>
            <div className="icons">
                <div className="one">
                    <i class="fas fa-eye"></i>
                    <h3>LASER EYE CARE</h3>
                </div>
                <div className="two">
                    <i class="fa-solid fa-heart-pulse"></i>
                    <h3>HEART CARE</h3>
                </div>
                <div className="three">
                    <i class="fa-solid fa-brain"></i>
                    <h3>NEUROLOGY</h3>
                </div>
                <div className="four">
                    <i class="fas fa-tooth"></i>
                    <h3>DENTAL CARE</h3>
                </div>
                <div className="five">
                    <i class="fas fa-assistive-listening-systems"></i>
                    <h3>EAR CARE</h3>
                </div>
                <div className="six">
                    <i class="fa-solid fa-briefcase-medical"></i>
                    <h3>EMERGENCY</h3>
                </div>
            </div>
        </div>
    );
}

export default Info2;