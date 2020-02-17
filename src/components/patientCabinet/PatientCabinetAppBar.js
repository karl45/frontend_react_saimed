import React, { useState } from 'react'
import clsx from 'clsx';
import { AppBar, Typography, Toolbar, Popover, Grid, List, ListItem, Button, IconButton, Container } from '@material-ui/core'
import { AccountCircle } from "@material-ui/icons";
import { makeStyles } from '@material-ui/styles';
import { useHistory, Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Divider from '@material-ui/core/Divider';
import classNames from 'classnames';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    title: {
        transition: "0.3s",
        fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';",
        fontSize: "2em",
        fontWeight: "700",
        display: "inline-block",
        paddingTop: ".3125rem",
        paddingBottom: ".3125rem",
        marginRight: "1rem",
        lineHeight: "42px",
        whiteSpace: "nowrap",
        color: "white !important",
        [theme.breakpoints.down("md")]: {
          fontSize: "5vw"
        }
    },
    appbar:{
        [theme.breakpoints.down('xs')]:{
        display:"none",
        },
        backgroundColor:"#26C6DA"
      },
      appBar: {
        backgroundColor:"#26C6DA",
        [theme.breakpoints.up('sm')]:{
            display:"none",
        },
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
    flexGrow: {
        flexGrow: '1'
    },
    iconDecription: {
        fontSize: "4vh",
    },
    popoverWidth: {
        [theme.breakpoints.down("xs")]: {
            fontSize: "3vw"
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "1vw"
        }
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerHeader: {
        display: 'inline',
        alignItems: 'center',
        fontSize:'1.5vw',
        justifyContent: 'flex-end',
      },
    navButton: {
        fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';",
        color: 'white',
        fontSize: '90%',
        letterSpacing: '1px',
        padding: '1.1em 1em',
        '&:hover': {
            color: "#fed136",

        },
        [theme.breakpoints.down('xs')]:{
          color: "#036ffc",
        },

    },
    navLink: {
        textDecoration: 'none',
    }
}))

const PatientCabinetAppBar = props => {
    const classes = useStyles()
    const history = useHistory()

    const [open, setOpen] = useState(false);
    const [dropen, setdrOpen] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = e => { 
        setAnchorEl(e.currentTarget);
        setOpen(true)
    }
    const [scrolledDown, setScrolledDown] = useState(false)

    const handleDrawerOpen = () => {
        setdrOpen(true);
      };
    
    const handleDrawerClose = () => {
        setdrOpen(false);
      };

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false)
    }

    const logout = () => {
        localStorage.removeItem('token')
        history.push('/')
    }

    return (
        <div className={classes.root}>
        <AppBar
        position="static"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: dropen,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, dropen && classes.hide)}>
            <MenuIcon />
          </IconButton>
          <Typography className={classNames(classes.title, scrolledDown ? classes.titleShrinkSize : '')}>
            SAIMED
          </Typography>
          <div className={classes.flexGrow}></div>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            onClick={handleOpen}
            color="inherit">
                <AccountCircle className={classes.iconDecription} />
          </IconButton>
          </Toolbar>
          <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}>
                <Grid item xs={12}>
                    <List>
                        <ListItem>
                            <Button href="#appointments" className={classes.popoverWidth}>
                                Редактировать
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Button href="#appointments" className={classes.popoverWidth} onClick={logout}>
                                Выйти
                            </Button>
                        </ListItem>
                    </List>
                </Grid>
            </Popover>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={dropen}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
             <ChevronLeftIcon />
            Медицинский кабинет SAIMED
          </IconButton>
        </div>
        <Divider />
        <List>
        <ListItem button >
              <ListItemIcon>
                  <InboxIcon /> 
              </ListItemIcon>
              <ListItemText >
              <Link to='/cabinet' className={classes.navLink}>
                <Button onClick={handleDrawerClose} className={classes.navButton}>Мои записи</Button>
              </Link>
              </ListItemText>
        </ListItem>
        <ListItem button>
              <ListItemIcon>
                  <MailIcon />
              </ListItemIcon>
              <ListItemText >
                <Link to='/cabinet/makeAppointment' className={classes.navLink}>
                    <Button onClick={handleDrawerClose} className={classes.navButton}>Записаться</Button>
                </Link>
              </ListItemText>
        </ListItem>
        </List>       
      </Drawer>
        <AppBar className={classes.appbar} position="static">
            <Container>
                <Toolbar>
                    <Typography className={classes.title}>SAIMED</Typography>
                    <Link to='/cabinet' className={classes.navLink}>
                        <Button className={classes.navButton}>Мои записи</Button>
                    </Link>
                    <Link to='/cabinet/makeAppointment' className={classes.navLink}>
                        <Button className={classes.navButton}>Записаться</Button>
                    </Link>
                    <div className={classes.flexGrow}></div>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        onClick={handleOpen}
                        color="inherit">
                        <AccountCircle className={classes.iconDecription} />
                    </IconButton>
                </Toolbar>
            </Container>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}>
                <Grid item xs={12}>
                    <List>
                        <ListItem>
                            <Button href="#appointments" className={classes.popoverWidth}>
                                Редактировать
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Button href="#appointments" className={classes.popoverWidth} onClick={logout}>
                                Выйти
                            </Button>
                        </ListItem>
                    </List>
                </Grid>
            </Popover>
      </AppBar>
      </div>
    )
}

export default PatientCabinetAppBar