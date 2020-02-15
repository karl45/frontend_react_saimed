import React, { useState } from 'react'
import AppointmentsList from './AppointmentsList'
import CabinetAppBar from './CabinetAppBar'
import { makeStyles } from '@material-ui/styles'
import { Route } from 'react-router-dom'
import AppointmentPage from './AppointmentPage'

const useStyles = makeStyles(theme => ({
    background: {
        backgroundColor: '#f5f5f5'
    }
}))

const PatientCabinet = props => {
    const classes = useStyles()

    return (
        <div className={classes.background}>
            <CabinetAppBar />
            <Route exact path='/cabinet'>
                <AppointmentsList />
            </Route>
            <Route exact path='/cabinet/makeAppointment'>
                <AppointmentPage />
            </Route>
        </div>
    )
}

export default PatientCabinet