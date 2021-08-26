import "../index.scss";
import React from "react";

function Footer() {

   return (
      <div class="footer">
         <div class="footer-container purple-scheme" >
            <div class="footer-section">
               <a href="https://www.qwerhacks.com/">
                  <img src={require("../img/qh_logo.png")} alt="website logo" class="footer-logo" />
               </a>
            </div>
            <div class="footer-section">
               <div>contact us:</div>

               <div class="footer-social">
                  <div class="footer-icon-wrapper">
                     <a class="footer-icon" href="https://www.facebook.com/qwerhacks/" target="_blank" rel="noopener noreferrer">
                        <img src={require("../img/facebook.png")} alt="facebook logo" width="100%" />
                     </a>
                  </div>
                  <div class="footer-icon-wrapper">
                     <a class="footer-icon" href="https://www.instagram.com/qwerhacks/" target="_blank" rel="noopener noreferrer" >
                        <img src={require("../img/instagram.png")} alt="instagram logo" width="100%" />
                     </a>
                  </div>
                  <div class="footer-icon-wrapper">
                     <a class="footer-icon" href="https://twitter.com/qwerhacks" target="_blank" rel="noopener noreferrer" >
                        <img src={require("../img/twitter.png")} alt="twitter logo" width="100%" />
                     </a>
                  </div>
                  <div class="footer-icon-wrapper">
                     <a class="footer-icon" href="mailto:qwerhacks@gmail.com">
                        <img src={require("../img/email3.png")} alt="email logo" width="100%" />
                     </a>
                  </div>
               </div>
            </div>
            <div class="footer-section">
               <div>etc:</div>
               <a class="footer-link" href="https://drive.google.com/file/d/1Q-oz3N8M9OQd0Assxkzp0lhJrG9K_yp0/view" target="_blank" rel="noopener noreferrer">sponsorship packet (color)</a>
               <a class="footer-link" href="https://drive.google.com/file/d/15rca4077W_vbpksJKcfUJlV75e-Mt_OC/view" target="_blank" rel="noopener noreferrer">sponsorship packet (b/w)</a>
               <a class="footer-link" href="https://docs.google.com/forms/d/e/1FAIpQLScLI58PM-83LkVisDNw7MtaODQpSp36QtJEDjhsgAgmd9XQNA/viewform" target="_blank" rel="noopener noreferrer">interested in judging, mentoring, or volunteering?</a>
            </div>
         </div>
      </div>
   );
}

export default Footer;