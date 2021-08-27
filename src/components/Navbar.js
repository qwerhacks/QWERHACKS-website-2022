import "../index.scss";
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

    return (
        <div>
            <NavLink exact to="/"><img class="home-button" src={require("../img/qh_logo_circle.png")} alt="qwer hacks home" /></NavLink>
            <div class="nav">
                <NavLink to="/apply"><button type="button" class="nav-button nav-hover-peach">apply</button></NavLink>
                <NavLink to="/faq"><button type="button" class="nav-button nav-hover-yellow">faq</button></NavLink>
                <NavLink to="/schedule"><button type="button" class="nav-button nav-hover-indigo">schedule</button></NavLink>
                <NavLink to="/sponsors"><button type="button" class="nav-button nav-hover-blue">sponsors</button></NavLink>
                <NavLink to="/collaborators"><button type="button" class="nav-button nav-hover-green">collaborators</button></NavLink>
                <NavLink to="/resources"><button type="button" class="nav-button nav-hover-purple">resources</button></NavLink>
                <NavLink to="/about"><button type="button" class="nav-button nav-hover-peach">about</button></NavLink>
            </div>
        </div>

    );
}

export default Navbar;


