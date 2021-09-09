import React, { useState } from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

function MobileMenu() {
  const [showNav, setshowNav] = useState(false);

  function handleClick(e) {
    setshowNav(!showNav);
    console.log("showNav is now " + showNav);
  }

  return (
    <div class="mobile-header">
      <div class="hamburger" onClick={handleClick}>
        <div class="hamburger-line"></div>
        <div class="hamburger-line"></div>
        <div class="hamburger-line"></div>
      </div>
      <NavLink exact to="/" class="mobile-title"><h2>QWER Hacks</h2></NavLink>
      {showNav && <div className="mobile-nav" onClick={handleClick}> <Navbar /></div>}
    </div >

  );

}


export default MobileMenu;