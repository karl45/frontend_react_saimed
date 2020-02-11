import React, { Fragment } from 'react'
import { CardMedia, Grid, Button, Typography } from '@material-ui/core'
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';
import backgroundImage from '../../img/1.JPG'
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

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
      label: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath:backgroundImage,
    },
    {
      label: 'Bird',
      imgPath:backgroundImage2,
    },
    {
      label: 'Bali, Indonesia',
      imgPath:backgroundImage3,
    },

  ];

const useStyles = makeStyles(theme => createStyles({
    root: {
        flexGrow: 1,
      },
      header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
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
        color: theme.palette.primary.dark,
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
    introHeading: {
        fontSize: '6vw',
        [theme.breakpoints.down('xs')]: {
            fontSize:"15vw",
        },
        fontWeight: '700',
        paddingBottom:theme.spacing(4),
        lineHeight: '75px',
        fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    },
   
}))

const HeadingSection = props => {
    const classes = useStyles()
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
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {/* <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      /> */}
    </div>
        // <CardMedia className="bg">
        //     <Grid container className={classes.introText} justify="flex-start" alignItems="center" >
        //         <Grid  item xs={6}>
        //         <Typography className={classes.introHeading}>
        //                   SAIMED
        //               </Typography>
        //               <Typography className={classes.introLeadIn}>
        //                   Кабинет детского 
        //                   невропатолога
        //               </Typography>
        //                   <DatePickSection />
        //         </Grid>
        //     </Grid>
        // </CardMedia>
    )
}

export default HeadingSection