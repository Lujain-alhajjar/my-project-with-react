import React from "react";

function Flex(){
    return(
        <div className="flex">
            <div className="one">                	
                <i class="fas fa-brain"></i>
                <h3>NEUROLOGY CARE</h3>
                <p>
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                </p>
            </div>
            <div className="two">
                <i class="fas fa-heartbeat"></i>
                <h3>CARDIOLOGY CARE</h3>
                <p>
                    Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                </p>
            </div>
            <div className="three">
                <i class="fa-solid fa-lungs"></i>
                <h3>Respiratory care</h3>
                <p>
                    Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                </p>
            </div>
        </div>
    );
}
export default Flex;