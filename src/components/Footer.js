import "../index.scss";
import React from "react";

function Footer() {

   return (

      <div class="footer">
         {/* <Link className="text-link" to="/"><button type="button" id="about" class="b">home</button></Link> */}
         {/* <div class="footer-card card peach-scheme" > */}
         <div class="footer-section">
            <div class="footer-logo-social">
            <img src={require("../img/qh_logo.png")} alt="website logo" class="footer-logo" />

               <div class="footer-social">
                  <div class="footer-icon-wrapper">
                     <a class="footer-icon" href="https://www.facebook.com/qwerhacks/" target="_blank" rel="noopener noreferrer">
                        <img src={require("../img/fb-icon.png")} alt="facebook logo" width="100%" />
                     </a>
                  </div>
                  <div class="footer-icon-wrapper">
                     <a class="footer-icon" href="https://www.instagram.com/qwerhacks/" target="_blank" rel="noopener noreferrer" >
                        <img src={require("../img/ig-icon.png")} alt="instagram logo" width="100%" />
                     </a>
                  </div>
                  <div class="footer-icon-wrapper">
                     <a class="footer-icon" href="mailto:qwerhacks@gmail.com">
                        <img src={require("../img/email-icon.png")} alt="email logo" width="100%" />
                     </a>
                  </div>
                  <div class="footer-icon-wrapper">
                     <a class="footer-icon" href="https://twitter.com/qwerhacks" target="_blank" rel="noopener noreferrer" >
                        <img src={require("../img/icon-twitter.png")} alt="twitter logo" width="100%" />
                     </a>
                  </div>
               </div>
            </div>
         </div>


         <div class="footer-section">
            <div class="card peach-scheme">
               <div class="footer-link"> <a href="https://drive.google.com/file/d/1Q-oz3N8M9OQd0Assxkzp0lhJrG9K_yp0/view" target="_blank" rel="noopener noreferrer" class="sponsorship-packet">sponsorship packet (color)</a> </div>
               <div class="footer-link"> <a href="https://drive.google.com/file/d/15rca4077W_vbpksJKcfUJlV75e-Mt_OC/view" target="_blank" rel="noopener noreferrer" class="sponsorship-packet">sponsorship packet (b/w)</a> </div>
               <div class="footer-link"> <a href="https://docs.google.com/forms/d/e/1FAIpQLScLI58PM-83LkVisDNw7MtaODQpSp36QtJEDjhsgAgmd9XQNA/viewform" target="_blank" rel="noopener noreferrer" class="sponsorship-packet">interested in judging/mentoring/volunteering?</a></div>
            </div>
         </div>
         {/* </div> */}
      </div>
   );
}

export default Footer;