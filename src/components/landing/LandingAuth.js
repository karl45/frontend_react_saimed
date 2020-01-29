import React, { Fragment, useState } from 'react'
import clsx from 'clsx';
import {Button} from  '@material-ui/core';
import { useEffect } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import SwitchRoll from '@material-ui/core/Switch';
import {
    Switch,
    Route,
  } from "react-router-dom";
  import classNames from 'classnames';
  import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar';
import Checkbox from '@material-ui/core/Checkbox';
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
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import Popover from '@material-ui/core/Popover';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  import Fab from '@material-ui/core/Fab';
  import DeleteIcon from '@material-ui/icons/Delete';
  import EditIcon from '@material-ui/icons/Edit';
  import Paper from '@material-ui/core/Paper';
  import FilterListIcon from '@material-ui/icons/FilterList';
  import DescriptionIcon from '@material-ui/icons/Description';
  import AddIcon from '@material-ui/icons/Add';
  import { green, blue, red } from '@material-ui/core/colors';



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
   
  },
  fabDelete:{
    marginTop:theme.spacing(3),
    marginRight:theme.spacing(3),
    marginLeft:theme.spacing(2),
    backgroundColor:red[900],
    color:"white",
    '&:hover':{
      backgroundColor:"white",
      color:red[500]
    }
  },
  fabAdd:{
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor:blue[500],
    color:"white",
    '&:hover':{
      backgroundColor:"white",
      color:blue[500]
    }
  },

  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  
  alarmOn:{
    color:green[500],
    fontSize:50,
  },
   
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
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
    padding: theme.spacing(10),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

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
paper: {
  paddingTop: theme.spacing(2),
  paddingBottom:theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.primary,
},
paperIcons: {
  marginTop:theme.spacing(3),
  marginRight:theme.spacing(3),
  marginLeft:theme.spacing(2)
},
IconDecription:{
  marginRight: theme.spacing(1),
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
    const [open, setOpen] = React.useState(false);
    const [scrolledDown, setScrolledDown] = useState(false);
    const { openLoginModal } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [state, setState] = React.useState({
      checkedA:false,
      checkedA1:false,
      checkedB:false,
      checkedB1:false
    });
    
    const handleChange = name => event => {
      setState({ ...state, [name]: event.target.checked });
    };
    const handleSort=(name_check,name_uncheck)=>event=>{
      setState({...state,[name_check]:event.target.checked,[name_uncheck]:false});
    }
    
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const openFilter = Boolean(anchorEl);
    const id = openFilter ? 'simple-popover' : undefined;

    
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
            
            <Typography className={classNames(classes.title, scrolledDown ? classes.titleShrinkSize : '')}>
              SAIMED
            </Typography>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit">
              <FilterListIcon />
            </IconButton>
        
          </Toolbar>
          <Popover
        id={id}
        className={classes.popoverWidth}
        open={openFilter}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant="h4">Сортировать по</Typography>
          <Divider/>
          <List>
          <Paper className={classes.paper}>
            <ListItem>
          <FormControlLabel
        control={
          <SwitchRoll
            checked={state.checkedB}
            onChange={handleSort('checkedB','checkedB1')}
            value="checkedB"
            color="primary"
          />
        }
        label="По возрастанию"
      />
      </ListItem>
      <ListItem>
      <FormControlLabel
      control={
        <SwitchRoll
          checked={state.checkedB1}
          onChange={handleSort('checkedB1','checkedB')}
          value="checkedB1"
          color="primary"
        />
      }
      label="По убыванию"
    />
    </ListItem>
          </Paper>
          </List>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h4">Критерии</Typography>
          <Divider/>
          <List>
          <Paper className={classes.paper}>
            <ListItem>
            <FormControlLabel
            control={
              <Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
              }
              label="Дата"
            />
            </ListItem>
            <ListItem>
            <FormControlLabel
              control={
                <Checkbox checked={state.checkedA1} onChange={handleChange('checkedA1')} value="checkedA1" />
              }
              label="Статус"
            />
            </ListItem>
            </Paper>
          </List>
        </Grid>
          </Grid>
      </Popover>
        </AppBar>
  
    <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}>
        <Typography variant="h2">Your cabinet</Typography>
          <List>
          <Paper>

          <ListItem>
          <ListItemIcon>
            <AlarmOnIcon className={classes.alarmOn}/>
            
          </ListItemIcon>
          <ListItemText >
            <Grid container spacing={1}>
            <Grid item xs={7}>
          <div className={classes.paper}>
           <h2>Понедельник 12 октября, 09:00</h2>
          </div>
        </Grid>
        <Grid item xs={5}>

            <Fab variant="extended" color="secondary" className={classes.paperIcons}>
              <EditIcon className={classes.DescriptionIcon}/>
              Изменить
            </Fab>
            <Fab variant="extended" className={classes.fabDelete}>
              <DeleteIcon className={classes.DescriptionIcon}/>
              Удалить
            </Fab>
            <Fab variant="extended" className={classes.paperIcons}>
              <DescriptionIcon className={classes.DescriptionIcon}/>
              Заключение
            </Fab>
        </Grid>
            </Grid>
           
          </ListItemText>
        </ListItem>
        </Paper>
        </List>
        <Fab variant="extended" className={classes.fabAdd} >
            <AddIcon  className={classes.DescriptionIcon}/>
            Добавить запись
          </Fab>
        </main>
      </div>
    );
  }
  
  LandingAuth.propTypes = {
    container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
  };
  

export default LandingAuth