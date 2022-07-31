import React from "react";
import './footer.css'
function Footer(){
    return(
        <div className="footer">
            <div className="text">
                <h2>GET IN TOUCH</h2>
                <p>
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                </p>
            </div>
            <div className="form">
                <form action="">
                    <input type="text" placeholder="Enter your name" required/>
                    <input type="email" name="" id="" placeholder="Enter a valid email address" required/>
                    <textarea name="" id="" cols="" rows="" required placeholder="Enter your message"></textarea>
                    <input type="submit" value="submit" />
                </form>
            </div>
        </div>
    );
}

export default Footer;