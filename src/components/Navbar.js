import "../index.scss";
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

    return (
        <div class="nav" id="nbar">
            <div class="nav-buttons">
                <NavLink exact className="text-link" to="/"><button type="button" class="nav-button">home</button></NavLink>
                <NavLink className="text-link" to="/apply"><button type="button" class="nav-button">apply!</button></NavLink>
                <NavLink className="text-link" to="/faq"><button type="button" class="nav-button">faq</button></NavLink>
                <NavLink className="text-link" to="/schedule"><button type="button" class="nav-button">schedule</button></NavLink>
                <NavLink className="text-link" to="/sponsors"><button type="button" class="nav-button">sponsors</button></NavLink>
                <NavLink className="text-link" to="/mentors"><button type="button" class="nav-button">mentors</button></NavLink>
                <NavLink className="text-link" to="/resources"><button type="button" class="nav-button">resources</button></NavLink>
            </div>
            {/* <div class="social_media">
                    <div class="icon">
                        <a href="https://www.facebook.com/qwerhacks/" target="_blank"><img src={require("../img/fb-icon.png")} alt="facebook logo" width="30px"/></a>
                    </div>
                    <div class="icon">
                        <a href="https://www.instagram.com/qwerhacks/" target="_blank"><img src={require("../img/ig-icon.png")} alt="instagram logo" width="30px"/></a>
                    </div>
                    <div class="icon"> 
                        <a href="mailto:qwerhacks@gmail.com"><img src={require("../img/email-icon.png")} alt="email logo" width="30px"/></a>
                    </div>
                    <div class="icon"> 
                        <a href="https://twitter.com/qwerhacks" target="_blank"><img src={require("../img/icon-twitter.png")} alt="twitter logo" width="30px"/></a>
                    </div>
                </div> */}
        </div>

    );
}

export default Navbar;


