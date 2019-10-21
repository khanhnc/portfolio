import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

class LandingPage extends Component {
    render() {
        return (
            <Grid className="landing-grid">
                <Grid item xs>
                    <div className="banner-text">
                        <h3>Khanh Nguyen</h3>
                        <p className="languages">HTML/CSS | Typescript | JavaScript | Angular | React | Spring Framwork</p>
                        <div className="banner-link">
                            <a href="https://www.linkedin.com/in/khanh-nguyen-42376b151/" title="Linkin">
                                <i className="fa fa-linkedin fa-2x customIcon"></i>
                            </a>

                            <a href="https://www.facebook.com/khanhnc46">
                                <i className="fa fa-facebook fa-2x customIcon"></i>
                            </a>

                        </div>
                    </div>

                </Grid>
            </Grid>
        );
    }
}

export default LandingPage;
