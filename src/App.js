import React from 'react';
import './App.css';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {useTheme} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InfoIcon from '@material-ui/icons/Info';
import ListItemText from "@material-ui/core/ListItemText";

import {animateScroll as scroll, Element, Link} from 'react-scroll';


import LandingPage from "./components/landingpage";
import Projects from "./components/projects";
import About from "./components/aboutme";

const drawerWidth = 180;

const useDrawerStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const App = (props) => {
    const {container} = props;
    const classesDrawer = useDrawerStyles();

    const themeDrawer = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <React.Fragment>
            <Router basename={process.env.PUBLIC_URL}>
                <div className="landing-content">
                    <AppBar position="sticky">
                        <Toolbar className="header-color">
                            {matches ?
                                <IconButton edge="start" className={classes.menuButton} color="inherit"
                                            aria-label="menu" onClick={handleDrawerOpen}>
                                    <MenuIcon/>
                                </IconButton> : null
                            }
                            <Typography variant="h6" className={classes.title}>
                            </Typography>

                            {matches ? null : <React.Fragment>
                                <Link onClick={scrollToTop} className="nav-link" activeClassName="active">
                                    Home
                                </Link>
                                <Link to="projects" className="nav-link"  activeClassName="active"
                                      smooth={true} duration={500}>
                                    Projects
                                </Link>
                                <Link to="about" className="nav-link"
                                      smooth={true} duration={500} activeClassName="active">
                                    About
                                </Link>
                            </React.Fragment>

                            }
                        </Toolbar>
                    </AppBar>

                    <Drawer
                        className={classesDrawer.drawer}
                        variant="persistent"
                        anchor="left"
                        open={open}
                        classes={{
                            paper: classesDrawer.drawerPaper,
                        }}>
                        <div className={classesDrawer.drawerHeader}>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                            </IconButton>
                        </div>

                        <Divider/>
                        <List>
                            <Link onClick={scrollToTop} className="nav-link" activeClassName="active"

                                  style={{color: 'black', textDecoration: 'none'}}>
                                <ListItem button onClick={handleDrawerClose}>
                                    <ListItemIcon><HomeIcon/></ListItemIcon>
                                    <ListItemText primary="Home"/>
                                </ListItem>
                            </Link>
                            <Link to="projects" className="nav-link"  activeClassName="active" style={{color: 'black', textDecoration: 'none'}}
                                  smooth={true} duration={500}>
                                <ListItem button onClick={handleDrawerClose}>
                                    <ListItemIcon>< ListAltIcon/></ListItemIcon>
                                    <ListItemText primary="Projects"/>
                                </ListItem>
                            </Link>
                            <Link to="about" className="nav-link"  style={{color: 'black', textDecoration: 'none'}}
                                  smooth={true} duration={500} activeClassName="active">
                                <ListItem button onClick={handleDrawerClose}>
                                    <ListItemIcon><InfoIcon/></ListItemIcon>
                                    <ListItemText primary="About Me"/>
                                </ListItem>
                            </Link>
                        </List>
                    </Drawer>
                    <Element name="home" className="home-element" >
                        <LandingPage/>
                    </Element>
                    <Element name="projects" className="element even-elem" >
                        <Projects/>
                    </Element> <Element name="about" className="element not-even-elem" >
                    <About/>
                </Element>
                </div>
            </Router>
        </React.Fragment>
    );
};

export default App;
