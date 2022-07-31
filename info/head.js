import React from "react";
import Flex from './info2/flex';
import './head.css'
function Head(){
    return(
        <div className="head">
            <h1>MEDICINE CENTER ON THE GO!</h1>
            <p>
            With the new Medicine Centre app, the high-quality service that we are known for is now available via your smartphone.
            </p>
            <span>Available on the</span>
            <a href="">App Store </a>
            <span>and </span>
            <a href="">Google Play</a>
            <p>READ MORE</p>
            <Flex />
        </div>
    );
}
export default Head;
