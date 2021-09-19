import React from "react";

function Sponsors(props) {

  return (
    <div class="card blue-scheme">
      <h1><div>Sponsors</div>
        {/* <div class="subtitle">// our <a class="edit" href="https://drive.google.com/file/d/17rk7LLz3M1pvERu4jV5smDqKyXVDLIkI/view?usp=sharing" target="_blank" rel="noopener noreferrer" >sponsorship deck</a> + <a class="edit" href="https://tinyurl.com/qwer-sponsor" target="_blank" rel="noopener noreferrer" >sponsorship form</a></div> */}
      </h1>
      <p>contact us by email, facebook, or instagram if you're interested in sponsoring qwer hacks 2022!</p>
      <div class="other"> <a href="https://drive.google.com/file/d/1Q-oz3N8M9OQd0Assxkzp0lhJrG9K_yp0/view" target="_blank" rel="noopener noreferrer" class="sponsorship-packet">sponsorship packet (color)</a> </div>
      <div class="other"> <a href="https://drive.google.com/file/d/15rca4077W_vbpksJKcfUJlV75e-Mt_OC/view" target="_blank" rel="noopener noreferrer" class="sponsorship-packet">sponsorship packet (b/w)</a> </div>
      <div class="sponsor-class">
        <h2>Pride Tier</h2>
        <div class="sponsors">
          {/* <a class="spons-img" href="https://www.xilinx.com/" target="_blank" rel="noopener noreferrer" > <img src={require("../img/xilinx.png")} alt="xilinx logo" width="90px" /> </a> */}
        </div>
      </div>
      <div class="sponsor-class">
        <h2>Freedom Tier</h2>
        <div class="sponsors">
          <a class="spons-img" href="https://robinhood.com/us/en/" target="_blank" rel="noopener noreferrer" ><img src={require("../img/robinhood2.png")} alt="robinhood logo" width="80px" /></a>
          <a class="spons-img" href="https://www.henselphelps.com/" target="_blank" rel="noopener noreferrer" ><img src={require("../img/hensel-phelps.png")} alt="hensel phelps logo" height="80px" /></a>
          {/* <a class="spons-img" href="https://www.att.com" target="_blank" rel="noopener noreferrer" ><img src={require("../img/att.png")} alt="att logo" width="80px" /></a> */}
        </div>
      </div>
      <div class="sponsor-class">
        <h2>Rainbow Tier</h2>
        <div class="sponsors">
          <a class="spons-img" href="https://www.qualcomm.com" target="_blank" rel="noopener noreferrer" ><img src={require("../img/qualcomm.jpg")} alt="qualcomm logo" width="70px" /></a>
          <a class="spons-img" href="https://www.kpmg.us/" target="_blank" rel="noopener noreferrer" ><img src={require("../img/kpmg.jpg")} alt="KPMG logo" width="70px" /></a>
          <a class="spons-img" href="https://www.accenture.com/us-en" target="_blank" rel="noopener noreferrer" ><img src={require("../img/accenture.png")} alt="accenture logo" height="60px" /></a>
          <a class="spons-img" href="https://www.northropgrumman.com/" target="_blank" rel="noopener noreferrer" ><img src={require("../img/northrop-grumman.png")} alt="Northrop Grumman logo" height="60px" /></a>
          {/* <a class="spons-img" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" ><img src={require("../img/facebook.png")} alt="facebook logo" width="90px" /></a> 
          <a class="spons-img" href="https://www.fmglobal.com/" target="_blank" rel="noopener noreferrer" ><img src={require("../img/fmglobal.png")} alt="fmglobal logo" width="90px" /></a>
          <a class="spons-img" href="https://aerospace.org/" target="_blank" rel="noopener noreferrer" ><img src={require("../img/aerospace.png")} alt="aerospace logo" width="90px" /></a>
          <a class="spons-img" href="https://www.chevron.com/" target="_blank" rel="noopener noreferrer" ><img src={require("../img/chevron.png")} alt="chervon logo" width="90px" /></a>
          <a class="spons-img" href="https://www.marathonpetroleum.com/" target="_blank" rel="noopener noreferrer" ><img src={require("../img/marathon.png")} alt="marathon logo" width="90px" /></a>
          <a class="spons-img" href="http://hackp.ac/mlh-stickermule-hackathons" target="_blank" rel="noopener noreferrer" ><img src={require("../img/stickermule2.png")} alt="stickermule logo" width="90px" /></a> */}
        </div>
      </div>
      {/* <h1>PARTNERS</h1>
      <div class="sponsor-class">
        <div class="sponsors">
          <a class="spons-img" href="https://www.swe.ucla.edu/" target="_blank" rel="noopener noreferrer" ><img src={require("../img/swe.png")} alt="swe-ucla logo" width="100px" /></a>
          <a class="spons-img" href="https://teachla.uclaacm.com" target="_blank" rel="noopener noreferrer" ><img src={require("../img/acm-teachla-updated.png")} alt="teach LA logo" width="90px" /></a>
          <a class="spons-img" href="https://w.uclaacm.com" target="_blank" rel="noopener noreferrer" ><img src={require("../img/acm-w-updated.png")} alt="acm-w logo" width="90px" /></a>
          <a class="spons-img" href="https://www.instagram.com/queersinstem/" target="_blank" rel="noopener noreferrer" ><img src={require("../img/qtstem.png")} alt="acm-w logo" width="90px" /></a>
          <a class="spons-img" href="http://bruinentrepreneurs.org/" target="_blank" rel="noopener noreferrer" ><img src={require("../img/be.png")} alt="be logo" width="90px" /></a>
          <a class="spons-img" href="https://www.uclaacm.com/" target="_blank" rel="noopener noreferrer" ><img src={require("../img/acm-impact.png")} alt="be logo" width="100px" /></a>
          <a class="spons-img" href="https://uclaacmai.github.io/" target="_blank" rel="noopener noreferrer" ><img src={require("../img/acm-ai.png")} alt="be logo" width="90px" /></a>
          <a class="spons-img" href="https://www.uclaallbrains.org/" target="_blank" rel="noopener noreferrer" ><img src={require("../img/allbrains.png")} alt="all brains logo" width="90px" /></a>
          <a class="spons-img" href="https://www.uclaacm.com/" target="_blank" rel="noopener noreferrer" ><img src={require("../img/acm.png")} alt="acm logo" width="90px" /></a>
        </div>
      </div> */}
    </div>

  );

}

export default Sponsors;