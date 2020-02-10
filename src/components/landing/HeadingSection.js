

import React, { Fragment } from 'react'
import { CardMedia, Grid, Button, Typography } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import backgroundImage from '../../img/background.jpg'
import DatePickSection from './DatePickSection'
import '../../backimg.css'

const useStyles = makeStyles(theme => createStyles({
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
    return (
        <CardMedia className="bg">
            <Grid container className={classes.introText} justify="flex-start" alignItems="center" >
                <Grid  item xs={6}>
                <Typography className={classes.introHeading}>
                          SAIMED
                      </Typography>
                      <Typography className={classes.introLeadIn}>
                          Кабинет детского 
                          невропатолога
                      </Typography>
                          <DatePickSection />
                </Grid>
            </Grid>
        </CardMedia>
    )
}

export default HeadingSection