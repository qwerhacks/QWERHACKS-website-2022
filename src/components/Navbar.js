import "../index.scss";
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

   return (
      <div class="nav">
         <div class="nav-buttons">
            <NavLink exact className="text-link" to="/"><button type="button" class="nav-button nav-hover-purple">home</button></NavLink>
            <NavLink className="text-link" to="/apply"><button type="button" class="nav-button nav-hover-peach">apply</button></NavLink>
            <NavLink className="text-link" to="/faq"><button type="button" class="nav-button nav-hover-yellow">faq</button></NavLink>
            <NavLink className="text-link" to="/schedule"><button type="button" class="nav-button nav-hover-indigo">schedule</button></NavLink>
            <NavLink className="text-link" to="/sponsors"><button type="button" class="nav-button nav-hover-blue">sponsors</button></NavLink>
            <NavLink className="text-link" to="/collaborators"><button type="button" class="nav-button nav-hover-green">collaborators</button></NavLink>
            <NavLink className="text-link" to="/resources"><button type="button" class="nav-button nav-hover-purple">resources</button></NavLink>
            <NavLink className="text-link" to="/about"><button type="button" class="nav-button nav-hover-peach">about</button></NavLink>
         </div>
         {/* <div class="social_media">
                    <div class="icon">
                        <a href="https://www.facebook.com/qwerhacks/" target="_blank" rel="noopener noreferrer" ><img src={require("../img/fb-icon.png")} alt="facebook logo" width="30px"/></a>
                    </div>
                    <div class="icon">
                        <a href="https://www.instagram.com/qwerhacks/" target="_blank" rel="noopener noreferrer" ><img src={require("../img/ig-icon.png")} alt="instagram logo" width="30px"/></a>
                    </div>
                    <div class="icon"> 
                        <a href="mailto:qwerhacks@gmail.com"><img src={require("../img/email-icon.png")} alt="email logo" width="30px"/></a>
                    </div>
                    <div class="icon"> 
                        <a href="https://twitter.com/qwerhacks" target="_blank" rel="noopener noreferrer" ><img src={require("../img/icon-twitter.png")} alt="twitter logo" width="30px"/></a>
                    </div>
                </div> */}
      </div>

   );
}

export default Navbar;


