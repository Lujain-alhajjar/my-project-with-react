import React from "react";
import img1 from './imgs/img4.png'
import img2 from './imgs/img5.png'
import img3 from './imgs/img6.png'
function Infoc(){
    return(
        <div className="infoc">
            <div className="one">
                <img src={img1} alt="" />
                <div className="text">
                    <h6>DR MARRY HUDSON</h6>
                    <p>
                    Sample text
                    </p>
                </div>
            </div>
            <div className="two">
                <img src={img2} alt="" />
               <div className="text">
                <h6>DR TOM FORD</h6>
                    <p>
                    Sample text
                    </p>
               </div>
            </div>
            <div className="three">
                <img src={img3} alt="" />
                <div className="text">
                    <h6>DR LINDA LARSON</h6>
                    <p>
                    Sample text
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Infoc;