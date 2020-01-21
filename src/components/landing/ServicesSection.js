import React from 'react'
import { Container, Typography, Grid } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStethoscope, faCircle, faUserNurse, faSyringe } from '@fortawesome/free-solid-svg-icons'
import { makeStyles, createStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => createStyles({
    section: {
        backgroundColor: '#f8f9fa',
        padding: '100px 0',
        textAlign: 'center'
    },
    textCenter: {
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
    serviceHeading: {
        marginTop: '45px',
        marginBottom: '15px',
        fontSize: '1.5rem',
        fontWeight: '700',
        fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    }
}))

const primaryColor = "#2978A0"

const ServicesSection = props => {
    const classes = useStyles()
    const { theme } = props
    return (
        <div id="services" className={classes.section}>
            <Container>
                <Grid container spacing={6} className={classes.textCenter}>
                    <Grid item xs={12}>
                        <Typography variant="h2" className={classes.sectionHeading}>Наши услуги</Typography>
                        <Typography variant="h3" className={classes.sectionSubheading}>Lorem ipsum dolor sit amet consectetur.</Typography>
                    </Grid>
                    <Grid item md={4}>
                        <span className="fa-layers fa-fw fa-4x">
                            <FontAwesomeIcon icon={faCircle} size="2x" color={primaryColor} transform="left-3"/>
                            <FontAwesomeIcon icon={faStethoscope} size="1x" inverse={true} />
                        </span>
                        <Typography variant="h4" className={classes.serviceHeading}>Общий осмотр</Typography>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</Typography>
                    </Grid>
                    <Grid item md={4}>
                        <span className="fa-layers fa-fw fa-4x">
                            <FontAwesomeIcon icon={faCircle} size="2x" color={primaryColor} transform="left-3"/>
                            <FontAwesomeIcon icon={faUserNurse} size="1x" inverse={true}/>
                        </span>
                        <Typography variant="h4" className={classes.serviceHeading}>Консультация</Typography>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</Typography>
                    </Grid>
                    <Grid item md={4}>
                        <span className="fa-layers fa-fw fa-4x">
                            <FontAwesomeIcon icon={faCircle} size="2x" color={primaryColor} transform="left-3"/>
                            <FontAwesomeIcon icon={faSyringe} size="1x" inverse={true} />
                        </span>
                        <Typography variant="h4" className={classes.serviceHeading}>Процедуры</Typography>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default ServicesSection