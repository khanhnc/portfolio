import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import data from "../projects";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";


class Projects extends Component {

    constructor(props) {
        super(props);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            open: false,
            scroll: 'paper',
            job: {}
        };
    }

    handleClickOpen = (job) => {
        this.setState({job: job, open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <React.Fragment>
                <Dialog
                    maxWidth="lg"
                    open={this.state.open}
                    onClose={this.handleClose}
                    scroll="paper"
                    aria-labelledby="scroll-dialog-title">
                    <DialogTitle id="scroll-dialog-title" style={{backgroundColor:'#BDBDBD', color:'#212121'}}>{this.state.job.title}</DialogTitle>
                    <DialogContent dividers={true}>
                        <div><label><strong>Description: </strong> {this.state.job.description}
                        </label></div>
                        <div><label><strong> Technologies and framework: </strong></label>
                            {this.state.job.title ? this.state.job.technoligies.map(tec => {
                                return (
                                    <Chip color="primary" label={tec}/>
                                );
                            }) : null}

                        </div>
                        <div>
                            {this.state.job.title ?
                                <div style={{paddingTop: "1em"}}>
                                    <CardMedia
                                        component="img"
                                        src={require('../images/' + this.state.job.images[1].img)}
                                        title="logo"/></div> : null}

                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Close
                        </Button>
                        {this.state.job.link ?
                            <Button onClick={this.handleClose} color="primary" href={this.state.job.link}>
                                Visit
                            </Button>
                            : null}
                    </DialogActions>
                </Dialog>
                <div className="page-content">
                    <div className="page-header">
                        <h3> Projects</h3>
                    </div>
                    {/*<Divider variant="middle" style ={{backgroundColor:"white"}}></Divider>*/}
                    <Grid container spacing={3} className="page-grid">
                        {data.jobs.map((job, key) => {
                            return (
                                <Grid item xs={3}>
                                    <Card>
                                        <CardActionArea onClick={() => this.handleClickOpen(job)}>
                                            <CardMedia
                                                component="img"
                                                alt="logo"
                                                height="140"
                                                src={require('../images/' + job.images[0].img)}
                                                title="logo"/>
                                            <CardContent style={{backgroundColor:'#EEEEEE'}}>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {job.title}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            );
                        })
                        }
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

export default Projects;
