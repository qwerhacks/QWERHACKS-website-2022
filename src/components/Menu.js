import React, { useState } from "react";
import Navbar from "./Navbar";

function Menu() {
  const [showNav, setshowNav] = useState(false);

  function handleClick(e) {
    setshowNav(!showNav);
    console.log("showNav is now " + showNav);
  }

  return (
    <div class="header">
      <div class="menu" id="hamburger" onClick={handleClick}>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="something">
        <div class="head">QWER HACKS</div>
      </div>
      { showNav && <div className="mobile-nav" onClick={handleClick}> <Navbar /></div >}
    </div >

  );

}


export default Menu;