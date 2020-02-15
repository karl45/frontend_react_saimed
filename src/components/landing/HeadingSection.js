import React, { Fragment } from 'react'
import { CardMedia, Grid, Button, Typography } from '@material-ui/core'
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';
import backgroundImage from '../../img/8.JPG'
import backgroundImage2 from '../../img/2.JPG'
import backgroundImage3 from '../../img/3.JPG'
import DatePickSection from './DatePickSection'
import '../../backimg.css'
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { deepPurple } from '@material-ui/core/colors';
import { cyan } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => createStyles({
    root: {
        flexGrow: 1,
      },
      header: {
        alignItems: 'center',
        height: "5vw",
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
      },
      img: {
        height: "80vh",
        display: 'block',
        width: '100%',
      },
    introText: {
        height:"100vh",
        textAlign:"center",
        flexGrow:"1",
    },
    textback1:{
      color: "white",
      backgroundColor:cyan[500],
      opacity:0.9
    },
    textback:{
      backgroundColor:deepPurple[300],
      color: "white",
      opacity:0.9
    },
    introLeadIn: {
        fontSize: '4vw',
        [theme.breakpoints.down('xs')]: {
            fontSize:"10vw",
            lineHeight: '40px',
        },
        fontStyle: 'italic',
        paddingBottom:theme.spacing(4),
        paddingTop:theme.spacing(2),
        lineHeight: '3vw',
        fontFamily: "'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
       
    },
    NoneDate:{
      display:"none",
    },
    xsWidth:{
      [theme.breakpoints.down('md')]: {
          width:"200vw",
      },
    },
    introHeading: {
        fontSize: '6vw',
        [theme.breakpoints.down('xs')]: {
            fontSize:"15vw",
        },
        fontWeight: '700',
        paddingBottom:theme.spacing(4),
        lineHeight: '75px',
        fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",    },
   
}))

const HeadingSection = props => {
    const classes = useStyles()
    const tutorialSteps = [
      {
        label:'Кабинет детского невропатолога',
        heading:'SAIMED',
        class:'bg',
        imgPath:backgroundImage,
        button:<DatePickSection />,
        textClass:classes.textback,
        just:"flex-start",
      },
      {
        label: 'Здоровье пациента для нас на первом месте',
        heading:'МЫ ПОМОЖЕМ ВАМ',
        class:'bg2',
        imgPath:backgroundImage2,
        button:'',
        textClass:classes.textback1,
        just:"center"
      },
      {
        label: '',
        heading:'',
        class:'bg3',
        imgPath:backgroundImage3,
        button:'',
        textClass:'',
        just:""
      },
    ];

   
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;
  
    const handleNext = () => {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    };
  
    const handleStepChange = step => {
      setActiveStep(step);
    };
    
    return (
          <div className={classes.root}>
            <CardMedia className={tutorialSteps[activeStep].class} src={tutorialSteps[activeStep].imgPath} alt={tutorialSteps[activeStep].label} >
            <Grid container className={classes.introText} justify={tutorialSteps[activeStep].just} alignItems="center" >
                 <Grid className={tutorialSteps[activeStep].textClass} item xs={6}>
                 <Typography className={classes.introHeading}>
                 {tutorialSteps[activeStep].heading}
                  </Typography>
                  <Typography className={classes.introLeadIn}>
                  {tutorialSteps[activeStep].label}
                  </Typography>
                  {tutorialSteps[activeStep].button}
                 </Grid>
             </Grid>
             </CardMedia>
    </div>
    )
}

export default HeadingSection