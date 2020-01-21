import React from 'react'
import { makeStyles, createStyles } from '@material-ui/styles'
import { Container, Grid, Typography, CardMedia } from '@material-ui/core';
import doctorImage from '../../img/doctor.jpg'

const useStyles = makeStyles(theme => createStyles({
    section: {
        backgroundColor: '#f8f9fa',
        padding: '100px 0',
        textAlign: 'center'
    },
    textCenter: {
        textAlign: 'center'
    },
    doctorImage: {
        width: '225px',
        height: '225px',
        border: '7px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '50%',
        margin: 'auto'
    },
    sectionHeading: {
        textTransform: 'uppercase',
        fontSize: '40px',
        fontWeight: '700',
        marginTop: '0',
        marginBottom: '15px',
        fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    },
    sectionSubheading: {
        fontSize: '16px',
        fontWeight: '400',
        fontStyle: 'italic',
        textTransform: 'none',
        fontFamily: "'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    },
    doctorIntro: {
        marginTop: '45px',
        marginBottom: '5px',
        fontSize: '1.5rem',
        fontWeight: '700',
        fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    },
    doctorInfo: {
        fontFamily: "'Roboto Slab', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    }
}))

const TeamSection = props => {
    const classes = useStyles()

    return (
        <div id="team" className={classes.section}>
            <Container>
                <Grid container spacing={6} justify="center" className={classes.textCenter}>
                    <Grid item xs={12}>
                        <Typography variant="h2" className={classes.sectionHeading}>НАШИ СПЕЦИАЛИСТЫ</Typography>
                        <Typography variant="h3" className={classes.sectionSubheading}>Lorem ipsum dolor sit amet consectetur.</Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <CardMedia image={doctorImage} className={classes.doctorImage}/>
                        <Typography variant="h4" className={classes.doctorIntro}>Исмаилова Салтанат</Typography>
                        <Typography className={classes.doctorInfo}>Детский невропатолог</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.doctorInfo}>Наши специалисты обладают опытом работы более 10 лет.</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default TeamSection