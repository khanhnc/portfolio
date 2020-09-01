import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";

class LandingPage extends Component {
    render() {
        return (
            <Grid>
                <Grid item xs>
                    <div className="banner-text">
                        <h3>Khanh Nguyen</h3>
                        <p className="languages"> Typescript | JavaScript | Angular | React | HTML/CSS | Spring
                            Framwork </p>
                        <div className="banner-link">
                            <a href="https://www.linkedin.com/in/khanh-nguyen-42376b151/" title="Linkin">
                                <i className="fa fa-linkedin fa-2x customIcon"></i>
                            </a>

                            <a href="https://github.com/khanhnc" title="git">
                                <i className="fa fa-github fa-2x customIcon"></i>
                            </a>

                        </div>
                    </div>

                </Grid>
            </Grid>
        );
    }
}

export default LandingPage;
