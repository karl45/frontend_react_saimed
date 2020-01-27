import React, { Fragment, useState } from 'react'
import clsx from 'clsx';
import {Button} from  '@material-ui/core';
import { useEffect } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import {
    Switch,
    Route,
  } from "react-router-dom";
  import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import NavbarAuth from './NavbarAuth'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import DraftsIcon from '@material-ui/icons/Drafts';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
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
  container: {
},
toolbar: {
    transition: '0.3s',
    paddingTop: '16px',
    paddingBottom: '16px'
},
toolbarShrink: {
    transition: '0.3s',
    paddingTop: '0px',
    paddingBottom: '0px'
},
scrollSpy: {
    display: 'flex'
},
title: {
    transition: '0.3s',
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';",
    fontSize: '1.75em',
    fontWeight: '700',
    display: 'inline-block',
    paddingTop: '.3125rem',
    paddingBottom: '.3125rem',
    marginRight: '1rem',
    lineHeight: '42px',
    whiteSpace: 'nowrap',
    flexGrow: '1',
    color: 'white !important'
},
titleShrinkSize: {
    transition: '0.3s',
    fontSize: '1.25em',
},
navButton: {
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';",
    color: 'white',
    fontSize: '90%',
    letterSpacing: '1px',
    padding: '1.1em 1em',
    '&:hover': {
        color: "#fed136",
    }
},
userIcon: {
    marginLeft: '10px'
}
}));


const LandingAuth = props => {  
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [scrolledDown, setScrolledDown] = useState(false);
    const { openLoginModal } = props;

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100
            if (isTop) {
                setScrolledDown(false)
            } else {
                setScrolledDown(true)
            }
        })
    })

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
      };
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classNames(classes.title, scrolledDown ? classes.titleShrinkSize : '')}>
                            SAIMED
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
          <Button color="primary" onClick={openLoginModal}> 
          <FontAwesomeIcon icon={faUserCircle} size="4x" style={{paddingRight:3}} className={classes.userIcon}/> Пользователь
          </Button>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>

          <Divider />
          <List>
              <Link to='/LandingAuth/Booking'>
          <ListItem
          button
          selected={selectedIndex === 0}
          onClick={event => handleListItemClick(event, 0)}>
     
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Booking" />
        </ListItem>
        </Link>
        <Link to='/LandingAuth/MedicalReceipts'>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={event => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="MedicalReceipts" />
        </ListItem>
        </Link>
          </List>
        </Drawer>
        <Switch>
    <Route exact path="/LandingAuth/Booking">
    <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}>
          <div className={classes.drawerHeader} />
         It is booking
        </main>
    </Route>
         <Route path="/LandingAuth/MedicalReceipts">
         <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}>
          <div className={classes.drawerHeader} />
         It is medical receipts
        </main>
         </Route>

         </Switch>
        
      </div>
    );
  }
  
  LandingAuth.propTypes = {
    container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
  };
  

export default LandingAuth