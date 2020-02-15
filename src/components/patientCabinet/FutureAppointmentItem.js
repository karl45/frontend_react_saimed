import React from "react";
import { Paper, Grid, Typography, Button, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import dateFormat from 'dateformat'
import PatientService from "../../service/PatientService";

const useStyles = makeStyles(theme => ({
    appointmentContainer: {
        padding: '15px',
        marginBottom: '10px'
    }
}))

const FutureAppointmentItem = props => {
    const classes = useStyles()
    const { date, startTime, endTime, appointmentId, onCancel } = props

    const cancelAppointment = async () => {
        try {
            await PatientService.cancelAppointment(appointmentId)
            onCancel()
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Card  className={classes.appointmentContainer}>
            <Grid container spacing={3} justify="space-between" alignItems="center"> 
                <Grid item>
                    <Typography>{dateFormat(date, 'dddd dd mmmm')}, {dateFormat(startTime, 'HH:MM')} - {dateFormat(endTime, 'HH:MM')}</Typography>
                </Grid>
                <Grid item>
                    <Button variant="outlined" onClick={cancelAppointment}>Отменить</Button>
                </Grid>
            </Grid>
        </Card>
    );
};

export default FutureAppointmentItem;
