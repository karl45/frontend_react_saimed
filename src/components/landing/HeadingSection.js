import React, { Fragment } from 'react'
import { CardMedia, Grid, Button, Typography } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import backgroundImage from '../../img/background.jpg'
import DatePickSection from './DatePickSection'

const useStyles = makeStyles(theme => createStyles({
    introText: {
        textAlign: 'center',
        paddingTop: '300px',
        paddingBottom: '200px',
        color: theme.palette.primary.dark
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
        <CardMedia id="page-top" image={backgroundImage}>
            <Grid container>
                <Grid item md={6}>
                    <div className={classes.introText}>
                        <Typography className={classes.introLeadIn}>Кабинет детского невропатолога</Typography>
                        <Typography className={classes.introHeading}>SAIMED</Typography>
                        <DatePickSection />
                        {/* <Button className={classes.button} onClick={props.onClick} variant="contained" color="primary">Записаться онлайн</Button> */}
                    </div>
                </Grid>
            </Grid>
        </CardMedia>
    )
}

export default HeadingSection