import React from "react";
import img1 from './imgs/img1.jpeg';
import img2 from './imgs/img2.jpeg';
import img3 from './imgs/img3.jpeg';
function Infob(){
    return(
        <div className="infob">
            <div className="one">
                <img src={img1} alt="" />
                <h3>CHILD CARE</h3>
                <p>
                    Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                </p>
                <span>READ MORE</span>
            </div>
            <div className="two">
                <img src={img2} alt="" />
                <h3>DENTAL CARE</h3>
                <p>
                    Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                </p>
                <span>READ MORE</span>
            </div>
            <div className="three">
                <img src={img3} alt="" />
                <h3>BIRTH CARE</h3>
                <p>
                    Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                </p>
                <span>READ MORE</span>
            </div>
        </div>
    );
}
export default Infob;