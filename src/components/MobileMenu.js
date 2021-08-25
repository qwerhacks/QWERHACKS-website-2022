import React, { useState } from "react";
import Navbar from "./Navbar";

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
      <h2 class="mobile-title">QWER Hacks</h2>
      {showNav && <div className="mobile-nav" onClick={handleClick}> <Navbar/></div>}
    </div >

  );

}


export default MobileMenu;