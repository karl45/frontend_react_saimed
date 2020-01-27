import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    dialogTitle: {
        textAlign: 'center'
    }
})

const LoginModal = props => {
    const { open, onClose } = props
    const classes = useStyles()

    return (
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>Войти в кабинет</DialogTitle>
            <DialogContent>
            <DialogContentText>
                To subscribe to this website, please enter your email address here. We will send updates
                occasionally.
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={onClose} color="primary">
                Cancel
            </Button>
           
            <Link style={{textDecoration: 'none' }} to="/LandingAuth">
            <Button color="primary">
                Login
                </Button>
            </Link>
        {/* <Button onClick={onClose} color="primary" >
            Login
        </Button> */}
         </DialogActions>
        </Dialog>
    )
}

  
export default LoginModal