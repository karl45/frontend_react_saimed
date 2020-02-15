import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { TextField, Button, Snackbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import AuthService from '../../service/AuthService'
import { useHistory } from "react-router-dom"
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
    dialogTitle: {
        textAlign: 'center'
    }
})

const LoginModal = props => {
    const history = useHistory()

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    const [error, setError] = React.useState(null);
    const [isErrorOpen, setIsErrorOpen] = React.useState(false);
    
    const classes = useStyles()

    const { open, onClose, openRegisterModal } = props

    const handleSubmit = async () => {
        try {
            const token = await AuthService.login(email, password)
            localStorage.setItem('token', token)
            history.push('/cabinet')
        } catch (err) {
            console.error(`Error: ${err}`)
            setError(err)
            setIsErrorOpen(true)
        }
    }

    const openRegistration = () => {
        onClose()
        openRegisterModal()
    }

    const handleCloseError = () => {
        setIsErrorOpen(false)
    }
    
    return (
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>Войти в кабинет</DialogTitle>
            <DialogContent>
                { isErrorOpen && error != null && 
                    <Snackbar open={isErrorOpen} autoHideDuration={6000} onClose={handleCloseError} anchorOrigin={{vertical: 'top', horizontal: 'right'}} >
                        <Alert onClose={handleCloseError} severity="error" variant="filled">
                            {error}
                        </Alert>
                    </Snackbar>
                }
                <TextField
                    margin="dense"
                    label="E-mail"
                    type="text"
                    fullWidth
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Пароль"
                    type="password"
                    fullWidth
                    onChange={e => setPassword(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                
            <Button onClick={openRegistration} color="primary">
                Зарегистрироваться
            </Button>
            <Button onClick={handleSubmit} color="primary">
                Войти
            </Button>
         </DialogActions>
     
        </Dialog>
    )
}

  
export default LoginModal