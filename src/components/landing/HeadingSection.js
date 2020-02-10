import React, { Fragment } from 'react'
import { CardMedia, Grid, Button, Typography } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import backgroundImage from '../../img/background.jpg'
import DatePickSection from './DatePickSection'
import '../../backimg.css'

const useStyles = makeStyles(theme => createStyles({
    introText: {
        textAlign: 'center',
        color: theme.palette.primary.dark,
   
    },
    introLeadIn: {
        fontSize: '40px',
        fontStyle: 'italic',
        lineHeight: '40px',
        marginBottom: '25px',
        fontFamily: "'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    },
    introHeading: {
        fontSize: '75px',
        fontWeight: '700',
        lineHeight: '75px',
        marginBottom: '50px',
        fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    },
   
}))

const HeadingSection = props => {
    const classes = useStyles()
    return (
        <CardMedia className="bg">
            <Grid container className={classes.introText} >
                <Grid item xs={6} >
                    <div className={classes.introText}>
                      {/* <Typography className={classes.introLeadIn}>Кабинет детского невропатолога</Typography> */}
                        {/* <Typography className={classes.introHeading}>SAIMED</Typography> */}
                          {/* <DatePickSection /> */}
                    </div>
                </Grid>
            </Grid>
        </CardMedia>
    )
}

export default HeadingSection