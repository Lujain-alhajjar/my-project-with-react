import React from "react";
import img1 from './imgs/info1.jpeg'
function Infoa(){
    return(
        <div className="infoa">
            <div className="left">
                <div className="one">
                    <div className="icon">
                        <i class="fa-solid fa-brain"></i>
                    </div>
                    <div className="text">
                        <h2>NEUROLOGICAL</h2>
                        <p>
                        Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                        </p>
                    </div>
                </div>
                <div className="two">
                    <div className="icon">
                        <i class="fa-solid fa-heart-pulse"></i>
                    </div>
                    <div className="text">
                        <h2>CARDIOLOGICAL</h2>
                        <p>
                        Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                        </p>
                    </div>
                </div>
                <div className="three">
                    <div className="icon">
                        <i class="fa-solid fa-briefcase-medical"></i>
                    </div>
                    <div className="text">
                        <h2>24 HRS EMERGENCY</h2>
                        <p>
                        Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                        </p>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src={img1} alt="" />
            </div>
        </div>
    );
}

export default Infoa;