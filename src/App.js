import React from 'react';
import './App.css';
import avatar from "./assets/avatar.jpg"

const App = () => {
        return (
            <div className="content-wrapper home-content">
                <div className="col-left col">
                    <img  className="avatar" alt="avatar" src={avatar} />
                    <div className="info">
                        <h2>Khanh Nguyen</h2>
                        <p>Software Engineer</p>
                        <p>khanhn46@gmail.com</p>
                        <div className="info-links">
                            <a href="https://www.linkedin.com/in/khanh-nguyen-42376b151" title="linkedin">
                                <i className="fa fa-linkedin fa-2x custom-icon"></i>
                            </a>
                            <a href="https://github.com/khanhnc" title="git">
                                <i className="fa fa-github fa-2x custom-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="page-line"></hr>
                < div className="col-right col intro-text">
                    Hi,
                    <br/>
                    <br/>
                    My name is Khanh, I am a software engineer with 2+ years of experience. I studied computer science (BSc) in Dresden University of Technology, Germany and worked 
                    for a small software company there. 
                    I grew up in a small villige in Vietnam, moved to Germany after my high school and
                    currently I am living in Melbourne Australia.
                    <br/>
                    <br/>
                    I like everything about programming, from front- to back-end in building web application. I have been working with JavaScript,
                    TypeScript (Angular and React), HTML, CSS and Java for years,  I also worked with Python for a small web app project.
                    My way of learning in programming is simple "Learn as much as I can". Currently I am geting to know 
                    about programming for embedded systems in my spare time, which I never have a chance to explore when I was younger.
                    I started playing around with Arduino microcontroller.
                     <br/>
                    <br/>
                    After many years of living aboard I saw and learned many things, which make me more open-minded.
                    I have been working for many jobs: ball boy(tenis), dishwashing, kitchen assistant,
                    house cleaning and moving, festival assistant, warehouse assistant and software development.   
                    <br/>
                    <br/>
                     Vietnamese is my mother tongue, German and English are my second languages, I am also trying to learn
                     French for simple conversations. I like travelling, seeing new cultures and trying new foods. 
                     <br/>
                    <br/>
                     I am very friendly... so go ahead and contact me :) 
                </div>
            </div>
        );
    }

export default App;
