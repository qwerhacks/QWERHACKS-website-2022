import React from "react";
import ReactDOM from "react-dom";
import './index.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/Home";
import Apply from "./components/Apply";
import About from "./components/About";
import Faq from "./components/Faq";
import Schedule from "./components/Schedule";
import Sponsors from "./components/Sponsors";
import Collaborators from "./components/Collaborators";
import Resources from "./components/Resources";

const rootElement = document.getElementById("root");

ReactDOM.render(
   <BrowserRouter>
      <div>
         <MobileMenu />
      </div>
      {/* <img src={require("./img/mlh-trust-badge-2021-white.png")} alt="mlh badge" class="mlh-banner" /> */}
      {/* <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-white.svg" alt="Major League Hacking 2022 Hackathon Season" class="mlh-banner" /> */}

      <a id="mlh-trust-badge"
         href="https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=white"
         target="_blank">
         <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-white.svg" alt="Major League Hacking 2022 Hackathon Season" />
      </a>
      <div className="content">
         <div className="desktop-nav"><Navbar /></div>
         <div className="container">
            <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/apply" component={Apply} />
               <Route path="/faq" component={Faq} />
               <Route path="/schedule" component={Schedule} />
               <Route path="/sponsors" component={Sponsors} />
               <Route path="/collaborators" component={Collaborators} />
               <Route path="/resources" component={Resources} />
               <Route path="/about" component={About} />
            </Switch>
         </div>
      </div>
      <div>
         <Footer />
      </div>
   </BrowserRouter>
   ,
   rootElement
);