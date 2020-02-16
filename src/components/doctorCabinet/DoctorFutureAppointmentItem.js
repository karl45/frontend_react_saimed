import React, { useContext, useState } from "react";
import { Grid, Typography, Button, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import dateFormat from 'dateformat'
import DoctorService from "../../service/DoctorService";
import { AlertContext } from "../../context/AlertContext";
import AppointmentDetailModal from "./AppointmentDetailsModal";
import SaveMedicalReportModal from "./SaveMedicalReportModal";
import MedicalReportModal from "./MedicalReportModal";

const useStyles = makeStyles(theme => ({
    appointmentContainer: {
        padding: '15px',
        marginBottom: '10px'
    }
}))

const DoctorFutureAppointmentItem = props => {
    const classes = useStyles()
    const { showError, showSuccess } = useContext(AlertContext)

    const [detailsOpen, setDetailsOpen] = useState(false)
    const [medicalReportOpen, setMedicalReportOpen] = useState(false)

    const { onSaveMedicalReport, date, startTime, endTime, appointmentId, onCancel, userId, patientName, patientPhoneNumber, patientBirthDate } = props

    console.log(appointmentId)

    const cancelAppointment = async () => {
        try {
            await DoctorService.cancelAppointment(appointmentId)
            onCancel()
            showSuccess('Запись успешно отменена!')
        } catch (err) {
            showError(err)
        }
    }

    const showDetails = () => { setDetailsOpen(true) }
    const showMedicalReport = () => { setMedicalReportOpen(true) }

    return (
        <Card  className={classes.appointmentContainer}>
            <Grid container spacing={3} justify="space-between" alignItems="center"> 
                <Grid item>
                    <Typography>{dateFormat(date, 'dddd dd mmmm')}, {dateFormat(startTime, 'HH:MM')} - {dateFormat(endTime, 'HH:MM')}</Typography>
                </Grid>
                <Grid item>
                    {userId ? 
                        <div>
                            <Button variant="outlined" onClick={cancelAppointment}>Отменить</Button>{' '}
                            <Button variant="outlined" onClick={showDetails}>Детали</Button>{' '}
                            <Button variant="outlined" onClick={showMedicalReport}>Обслужить</Button>
                        </div>
                    : <Typography>Свободно</Typography>}
                </Grid>
            </Grid>
            <AppointmentDetailModal 
                open={detailsOpen} 
                onClose={() => setDetailsOpen(false)}
                date={date} 
                startTime={startTime} 
                endTime={endTime} 
                patientName={patientName} 
                patientPhoneNumber={patientPhoneNumber}
                patientBirthDate={patientBirthDate}
            />
            <SaveMedicalReportModal 
                open={medicalReportOpen} 
                onClose={() => setMedicalReportOpen(false)}
                appointmentId={appointmentId}
                patientName={patientName} 
                patientPhoneNumber={patientPhoneNumber}
                patientBirthDate={patientBirthDate}
                onSaveMedicalReport={onSaveMedicalReport}
            />
        </Card>
    );
};

export default DoctorFutureAppointmentItem
