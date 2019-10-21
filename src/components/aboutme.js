import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";

import pdf from '../resume.pdf';
import {Button} from "@material-ui/core";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "About Me"
        };
    }

    render() {
        return (
            <div className="lading-content landing-grid">
                <div className="sub-content">
                    <Grid container alignItems="stretch" component={Card} spacing={3}>
                        <CardContent xs={4}>
                            <div style={{paddingBottom: '1em'}}>
                                <Avatar alt="me" src={require("../images/linkin.jpg")}
                                        style={{borderRadius: '0%', margin: "auto", width: 250, height: 250}}/>
                            </div>
                            <Divider variant="middle"/>

                            <div style={{textAlign: 'center', paddingTop: '1em'}}>
                                <Typography  variant="h4" component="h3"><strong>Khanh Nguyen</strong></Typography>
                                <span>khanhnc46@gmail.com</span>
                                <div className="banner-link-about">
                                    <a href="https://www.linkedin.com/in/khanh-nguyen-42376b151/" title="Linkin">
                                        <i className="fa fa-linkedin customIconXs"></i>
                                    </a>

                                    <a href="https://www.facebook.com/khanhnc46">
                                        <i className="fa fa-facebook customIconXs"></i>
                                    </a>

                                </div>
                            </div>
                        </CardContent>
                        <Grid item xs={8}>
                            <CardContent>
                                <Typography variant="h4" component="h3">
                                    About Me
                                </Typography>
                                <Typography variant="h6" component="h4">
                                    Hi, I'm a Junior Full Stack Developer.
                                </Typography>
                                <br/>
                                <Typography component="p">
                                    I am a new Graduate with almost two years of work experience as front-end and back-end developer.
                                    I have a degree in Computer Science from Dresden University of Technology in Germany.

                                </Typography>
                                <br/>
                                <Typography component="p">
                                    I have been worked with Typescript, Javascript, Angular, React, HTML/CSS, Java and Spring Framework.
                                    I am also familiar with Responsive Web Design, User interface design, Relational Database Management System and Scrum Development.
                                </Typography>
                                <br/>
                                <Typography component="p">
                                    I am originally from Vietnam and have lived in Germany for seven years. Currently I am living in Melbourne,
                                    Australia and seeking to gain more knowledge and experience to widen my skills and be more.
                                </Typography>
                            </CardContent>

                            <Button href={pdf}  variant="contained" color="primary"  target="_blank">See my resume</Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default About;
