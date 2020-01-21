import React, { Fragment, useState } from 'react';
import Dialog from '@material-ui/core/Dialog'
import { CardMedia, Grid, Button, Typography } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider,  DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles({
    dialogTitle: {
        textAlign: 'center'
    }
})

const DatePickerModal = props => {
    const { open, onClose } = props
    const [selectedDate, handleDateChange] = useState(new Date());

    const classes = useStyles()

    return (
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
            <DatePicker value={selectedDate} autoOk
        orientation="landscape"
        variant="static"
        openTo="date"
        onChange={handleDateChange}/>
          <Button onClick={onClose} color="primary">
                Cancel
            </Button>
            <Button onClick={onClose} color="primary">
                Choose time
            </Button>
        </Dialog>
    )
}

export default DatePickerModal