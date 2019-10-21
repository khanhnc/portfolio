import React from 'react';
import LandingPage from "./landingpage";
import {Route} from "react-router-dom";
import Projects from "./projects";
import About from "./aboutme";


export default function Main() {
    return (
        <React.Fragment>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/projects" component={Projects}/>
        </React.Fragment>
    );
}
