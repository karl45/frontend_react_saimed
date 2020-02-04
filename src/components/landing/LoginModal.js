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
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    dialogTitle: {
        textAlign: 'center'
    }
})

const LoginModal = props => {
    const { open, onClose } = props
    const [isDoctor, setIsDoctor] = React.useState('/LandingMedic');
    const [email,setEmail] = React.useState('');
    const classes = useStyles()

    const handleChange = event =>{
        setEmail(event.target.value);
        if(email == 'doctor'){
            setIsDoctor("/LandingMedic")
            console.log(isDoctor)

        }
        else{
            setIsDoctor('/LandingAuth')
    
        }
    }
  const handleSubmit = () => {
    console.log(isDoctor)

  }
    
    return (
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>Войти в кабинет</DialogTitle>
            <DialogContent>

            <TextField
                margin="dense"
                id="name"
                label="login"
                type="text"
                fullWidth
            />
              <TextField
                margin="dense"
                id="name"
                label="Password"
                type="password"
                fullWidth
                onFocus={handleChange}
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={onClose} color="primary">
                Cancel
            </Button>
            <Link style={{textDecoration: 'none' }} to={isDoctor}>
            <Button onClick={handleSubmit} color="primary">
                Login
                </Button>
            </Link>
         </DialogActions>
     
        </Dialog>
    )
}

  
export default LoginModal