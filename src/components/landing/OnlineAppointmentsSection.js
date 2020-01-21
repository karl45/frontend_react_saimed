import React from 'react'
import { makeStyles, createStyles } from '@material-ui/styles'
import { Container, Typography, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => createStyles({
    section: {
        padding: '100px 0',
        textAlign: 'center'
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
        marginBottom: '65px',
        textTransform: 'none',
        fontFamily: "'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    },
    button: {
        fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        fontWeight: '700',
        fontSize: '18px',
        padding: '20px 40px'
    }
}))

const OnlineAppointmentsSection = props => {
    const classes = useStyles()

    return (
        <Container id="appointments" className={classes.section}>
            <Typography variant="h2" className={classes.sectionHeading}>Онлайн запись</Typography>
            <Typography variant="h3" className={classes.sectionSubheading}>Вы можете записаться на приём онлайн прямо сейчас.</Typography>
            <Button className={classes.button} variant="contained" color="primary">Записаться онлайн</Button>
        </Container>
    )
}

export default OnlineAppointmentsSection