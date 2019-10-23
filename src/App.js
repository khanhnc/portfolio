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
import Main from "./components/main";
import clsx from 'clsx';

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
                                <NavLink to="/" exact className="nav-link" activeClassName="active">
                                    Home
                                </NavLink>

                                <NavLink to="/projects" exact className="nav-link" activeClassName="active">
                                    Projects
                                </NavLink>

                                <NavLink to="/about" exact className="nav-link" activeClassName="active">
                                    About Me
                                </NavLink>
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
                            <NavLink to="/" exact activeClassName="active"
                                     style={{color: 'black', textDecoration: 'none'}}>

                                <ListItem button onClick={handleDrawerClose}>
                                    <ListItemIcon><HomeIcon/></ListItemIcon>
                                    <ListItemText primary="Home"/>
                                </ListItem>
                            </NavLink>

                            <NavLink to="/projects" exact activeClassName="active"
                                     style={{color: 'black', textDecoration: 'none'}}>
                                <ListItem button onClick={handleDrawerClose}>
                                    <ListItemIcon>< ListAltIcon/></ListItemIcon>
                                    <ListItemText primary="Projects"/>
                                </ListItem>
                            </NavLink>

                            <NavLink to="/about" exact activeClassName="active"
                                     style={{color: 'black', textDecoration: 'none'}}>
                                <ListItem button onClick={handleDrawerClose}>
                                    <ListItemIcon><InfoIcon/></ListItemIcon>
                                    <ListItemText primary="About Me"/>
                                </ListItem>
                            </NavLink>

                        </List>
                    </Drawer>
                    <Main
                        className={clsx(classes.content, {
                            [classes.contentShift]: open,
                        })}/>
                </div>
            </Router>
        </React.Fragment>
    );
};

export default App;
