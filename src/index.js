import React from "react";
import ReactDOM from "react-dom";
import './index.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Apply from "./components/Apply";
import Faq from "./components/Faq";
import Schedule from "./components/Schedule";
import Sponsors from "./components/Sponsors";
import Mentors from "./components/Mentors";
import Resources from "./components/Resources";

const rootElement = document.getElementById("root");

ReactDOM.render(
   <BrowserRouter>
      <div>
         <Menu/>
      </div>
      <div className="content">
      <img src={require("./img/mlh-trust-badge-2021-white.png")} alt="mlh badge" class="mlh-banner"/>
         <div className="desktop-nav"><Navbar/></div>
         <div className="container">
            <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/apply" component={Apply} />
               <Route path="/faq" component={Faq} />
               <Route path="/schedule" component={Schedule} />
               <Route path="/sponsors" component={Sponsors} />
               <Route path="/mentors" component={Mentors} />
               <Route path="/resources" component={Resources} />
            </Switch>
         </div>
      </div>
      <div>
         <Footer/>
      </div>
   </BrowserRouter>
   ,
   rootElement
);