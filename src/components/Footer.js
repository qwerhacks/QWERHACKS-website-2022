import "../index.scss";
import React from "react";
import {Link } from "react-router-dom";

    function Footer() {

        return (

            <div class="footer">
                {/* <Link className = "text-link" to="/"><button type="button" id="about" class="b">home</button></Link> */}
                <div class="footer_logo">
                    <img src={require("../img/website-logo.png")} alt="website logo" class="logo" width="150px" /> 
                </div>
                <div class="team">
                    <div class="footer-team">team:</div>
                    <div class="names"> 
                        <div class="name-col">
                            <div class="n"> <b>arjun</b> subramonian </div>
                            <div class="n"> <b>ashley</b> ghodsian </div>
                            <div class="n"> <b>christine</b> kim </div>
                            <div class="n"> <b>diantha</b> ngo </div>
                            <div class="n"> <b>isabel</b> ketner </div>
                            <div class="n"> <b>karina</b> ting </div>
                            <div class="n"> <b>natasha</b> puthukudy </div>
                        </div>
                        <div class="name-col">
                            <div class="n"> <b>pragathi</b> venkatesh </div>
                            <div class="n"> <b>rithika</b> srinivasan </div>
                            <div class="n"> <b>sharvani</b> jha </div>
                            <div class="n"> <b>spurthi</b> rallapalli </div>
                            <div class="n"> <b>tanya</b> zhong </div>
                            <div class="n"> <b>vivian</b> chu </div>
                        </div>
                    </div>
                </div>
                <div class="team">
                    <div class="footer-team">etc:</div>
                    <div class="names"> 
                        <div class="name-col">
                            <div class="other"> <a href="https://drive.google.com/file/d/17rk7LLz3M1pvERu4jV5smDqKyXVDLIkI/view?usp=sharing" target="_blank" class="sponsorship-packet">sponsorship packet</a> </div>
                            <div class="other"> <a href="https://tinyurl.com/qwer-sponsor" target="_blank" class="sponsorship-packet">interested in sponsoring?</a></div>
                            <div class="other"> <a href="https://tinyurl.com/qwer-hacks-collab" target="_blank" class="sponsorship-packet">interested in mentoring?</a></div>
                            {/* <div class="other"> interested in volunteering?</div> */}
                        </div>
                    </div>
                </div>
                <div class="social_media_mobile">
                    <div class="whoknows">
                        <div class="icon">
                            <a href="https://www.facebook.com/qwerhacks/" target="_blank"><img src={require("../img/fb-icon.png")} alt="facebook logo" width="30px"/></a>
                        </div>
                        <div class="icon">
                            <a href="https://www.instagram.com/qwerhacks/" target="_blank"><img src={require("../img/ig-icon.png")} alt="instagram logo" width="30px"/></a>
                        </div>
                        <div class="icon"> 
                            <a href="mailto:qwerhacks@gmail.com"><img src={require("../img/email-icon.png")} alt="email logo" width="30px"/></a>
                        </div>
                        <div class="icon2"> 
                            <a href="https://twitter.com/qwerhacks" target="_blank"><img src={require("../img/icon-twitter.png")} alt="twitter logo" width="30px"/></a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    export default Footer;