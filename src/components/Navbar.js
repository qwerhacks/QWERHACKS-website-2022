import "../index.scss";
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

    return (
        <div class="nav">
            <NavLink className="nav-link" exact to="/"><img class="nav-home-button" src={require("../img/qh_logo_circle.png")} alt="qwer hacks home"/></NavLink>
            <NavLink className="nav-link" to="/apply"><button type="button" class="nav-button nav-hover-peach">apply</button></NavLink>
            <NavLink className="nav-link" to="/faq"><button type="button" class="nav-button nav-hover-yellow">faq</button></NavLink>
            <NavLink className="nav-link" to="/schedule"><button type="button" class="nav-button nav-hover-indigo">schedule</button></NavLink>
            <NavLink className="nav-link" to="/sponsors"><button type="button" class="nav-button nav-hover-blue">sponsors</button></NavLink>
            <NavLink className="nav-link" to="/collaborators"><button type="button" class="nav-button nav-hover-green">collaborators</button></NavLink>
            <NavLink className="nav-link" to="/resources"><button type="button" class="nav-button nav-hover-purple">resources</button></NavLink>
            <NavLink className="nav-link" to="/about"><button type="button" class="nav-button nav-hover-peach">about</button></NavLink>
        </div>

    );
}

export default Navbar;


