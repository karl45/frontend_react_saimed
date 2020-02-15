import React from "react";
import { Grid, Typography, Button, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import dateFormat from 'dateformat'

const useStyles = makeStyles(theme => ({
    appointmentContainer: {
        padding: '15px'
    }
}))

const PastAppointmentItem = props => {
    const classes = useStyles()
    const { date, startTime, endTime, appointmentId, onCancel } = props

    return (
        <Card  className={classes.appointmentContainer}>
            <Grid container spacing={3} justify="space-between" alignItems="center"> 
                <Grid item>
                    <Typography>{dateFormat(date, 'dddd dd mmmm')}, {dateFormat(startTime, 'HH:MM')} - {dateFormat(endTime, 'HH:MM')}</Typography>
                </Grid>
                <Grid item>
                    <Button variant="outlined">Заключение</Button>
                </Grid>
            </Grid>
        </Card>
    );
};

export default PastAppointmentItem;
