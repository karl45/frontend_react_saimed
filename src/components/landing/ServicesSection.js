import React from 'react'
import { Container, Typography, Grid } from '@material-ui/core'
import MobileStepper from '@material-ui/core/MobileStepper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStethoscope, faCircle, faUserNurse, faSyringe } from '@fortawesome/free-solid-svg-icons'
import { makeStyles, createStyles, useTheme } from '@material-ui/styles'
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Paper from '@material-ui/core/Paper';
import { useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Divider from '@material-ui/core/Divider';
import '../../backimg.css'
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(theme => ({
    section: {
        backgroundColor: '#f8f9fa',
        padding: '100px 0',
        [theme.breakpoints.down('md')]:{
            padding:"0",
            width:"200vw",
        },
        textAlign: 'center',
    },
    subContent:{
        [theme.breakpoints.up('sm')]:{
            fontSize:"3.5vw"
        },
        [theme.breakpoints.up('lg')]:{
            fontSize:"1.2vw"
        }
    },
    grid:{
        [theme.breakpoints.down('xs')]:{
            display:"none",
        }, 
    },
    mobstep:{
        marginLeft:"42%"
    },
    circle:{
        fontSize:"9vw",
        color:"#26C6DA",
        textAlign: 'center',
        [theme.breakpoints.between('xs','sm')]:{
            fontSize:"20vw",
        },
        [theme.breakpoints.between('sm','md')]:{
            fontSize:"14vw"
        },
        [theme.breakpoints.down('xs')]:{
            fontSize:"30vw",
        },
    },
    inverseIcons:{
        fontSize:"5vw",
        textAlign: 'center',
        [theme.breakpoints.down('xs')]:{
            fontSize:"20vw",
        },
        [theme.breakpoints.between('sm','md')]:{
            fontSize:"9vw"
        },
    },

    header: {
        display: 'inline',
        alignItems: 'center',
        height: 50,
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.up('sm')]:{
            display:"none",
        },
      },
    sectionHeading: {
        textTransform: 'uppercase',
        fontSize: '40px',
        fontWeight: '700',
        marginTop: '0',
        marginBottom: '15px',
        fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        [theme.breakpoints.up('sm')]:{
            fontSize: '4.5vw',
        },
        [theme.breakpoints.up('lg')]:{
            fontSize: '2.5vw',
        },
    },
    sectionSubheading: {
        fontSize: '16px',
        fontWeight: '400',
        fontStyle: 'italic',
        marginBottom: '65px',
        textTransform: 'none',
        fontFamily: "'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        [theme.breakpoints.between('sm','md')]:{
            marginBottom:"1vw"
        },
        [theme.breakpoints.up('sm')]:{
         fontSize:"4.2vw"
        },
        [theme.breakpoints.up('lg')]:{
            fontSize:"1.2vw"
           },
    },
    serviceHeading: {
        marginTop: '45px',
        fontSize: '10vw',
        fontWeight: '700',
        fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        [theme.breakpoints.up('sm')]:{
            fontSize: '5vw',
        },
      
        [theme.breakpoints.up('md')]:{
            fontSize: '5vw',
            marginTop: '4vw',
        },
        [theme.breakpoints.up('lg')]:{
            fontSize: '2vw',
            marginTop: '3vw',
        },
          [theme.breakpoints.up('xl')]:{
            fontSize: '1.5vw',
            marginTop: '3vw',
        },
    },
}));

const primaryColor = "#2978A0"

const tutorialSteps = [
    {
      label: 'Общий осмотр',
      icon:faStethoscope,
    },
    {
      label: 'Консультация',
      icon:faUserNurse
    },
    {
      label: 'Процедуры',
      icon:faSyringe 
    },
  ];

const ServicesSection = props => {
    const classes = useStyles()
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const [transformValue,setTransformValue] = React.useState('left-3');
    const maxSteps = tutorialSteps.length;
    const matches_tablet = useMediaQuery(theme.breakpoints.between('xs','sm'));
    const matches_large = useMediaQuery(theme.breakpoints.up('lg'));
    useEffect(()=>{
        window.addEventListener('load',()=>{
            if(!matches_tablet)
            {
               setTransformValue("left-4");
            }
            else if(matches_large)
            {
                setTransformValue("left-5");
            }
            else{
                setTransformValue("left-3");
            }
          })
    });


    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
      };
    
    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
      };

    return (
        <div id="services"  className={classes.section}>
            <Container >
                <Grid container className={classes.grid} spacing={6}>
                    <Grid item xs={12}>
                        <Typography variant="h2" className={classes.sectionHeading}>Наши услуги</Typography>
                        <Typography variant="h3" className={classes.sectionSubheading}>Lorem ipsum dolor sit amet consectetur.</Typography>
                    </Grid>
                    <Grid item xs={4}>
                    <span className="fa-layers fa-fw fa-4x">
                        <FontAwesomeIcon icon={faCircle} className={classes.circle} transform={transformValue}/>
                        <FontAwesomeIcon icon={faStethoscope} className={classes.inverseIcons} inverse={true} />
                    </span>
                        <Typography variant="h2" className={classes.serviceHeading}>Общий осмотр</Typography>
                        <Typography className={classes.subContent}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Minima maxime quam architecto quo inventore harum ex magni, 
                            dicta impedit.
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                    <span className="fa-layers fa-fw fa-4x">
                         <FontAwesomeIcon icon={faCircle} className={classes.circle} transform={transformValue}/>
                         <FontAwesomeIcon icon={faUserNurse} className={classes.inverseIcons} inverse={true}/> 
                    </span>
                        <Typography variant="h4" className={classes.serviceHeading}>Консультация</Typography>
                        <Typography className={classes.subContent}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Minima maxime quam architecto quo inventore harum ex magni, 
                            dicta impedit.
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                    
                    <span className="fa-layers fa-fw fa-4x">
                        <FontAwesomeIcon icon={faCircle} className={classes.circle} transform={transformValue}/>
                        <FontAwesomeIcon icon={faSyringe} className={classes.inverseIcons} inverse={true} />
                    </span>                        
                    <Typography variant="h4" className={classes.serviceHeading}>Процедуры</Typography>
                        <Typography className={classes.subContent}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Minima maxime quam architecto quo inventore harum ex magni, 
                            dicta impedit.
                        </Typography>
                    </Grid>
                </Grid>
                <Paper  className={classes.header}>
                <Typography variant="h2" className={classes.sectionHeading}>
                    Наши услуги
                </Typography>

                <Typography variant="h3" className={classes.sectionSubheading}>
                    Lorem ipsum dolor sit amet consectetur.
                </Typography>
                <Grid container alignItems="center" justify="center" spacing={3}>
                    <Grid item xs={3}>   
                    <Button  onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    </Button>
                    </Grid>
                <Grid item xs={6}>
                <span className="fa-layers fa-fw fa-4x">
                <FontAwesomeIcon icon={faCircle} className={classes.circle} transform="left-3"/>
                <FontAwesomeIcon className={classes.inverseIcons} icon={tutorialSteps[activeStep].icon} inverse={true} />
                </span>

                <Typography variant="h4" className={classes.serviceHeading}>
                    {tutorialSteps[activeStep].label}
                </Typography>

                <Typography>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. 
                    Minima maxime quam architecto quo 
                    inventore harum ex magni, dicta impedit.
                </Typography>
                <Divider />
                <MobileStepper
                    steps={maxSteps}
                    className={classes.mobstep}
                    position="static"
                    variant="dots"
                    activeStep={activeStep}
                   />
                </Grid>
                <Grid item xs={3}>

                <Button onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>  

                </Grid>
                </Grid>
                
                </Paper>

            </Container>
        </div>
    )
}

export default ServicesSection

