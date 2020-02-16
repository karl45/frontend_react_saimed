import React, { useState } from 'react'
import { AppBar, Typography, Toolbar, Popover, Grid, List, ListItem, Button, IconButton, Container } from '@material-ui/core'
import { AccountCircle } from "@material-ui/icons";
import { makeStyles } from '@material-ui/styles';
import { useHistory, Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    title: {
        transition: "0.3s",
        fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';",
        fontSize: "2em",
        fontWeight: "700",
        display: "inline-block",
        paddingTop: ".3125rem",
        paddingBottom: ".3125rem",
        marginRight: "1rem",
        lineHeight: "42px",
        whiteSpace: "nowrap",
        color: "white !important",
        [theme.breakpoints.down("md")]: {
          fontSize: "5vw"
        }
    },
    flexGrow: {
        flexGrow: '1'
    },
    iconDecription: {
        fontSize: "4vh",
    },
    popoverWidth: {
        [theme.breakpoints.down("xs")]: {
            fontSize: "3vw"
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "1vw"
        }
    },
    navButton: {
        fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';",
        color: 'white',
        fontSize: '90%',
        letterSpacing: '1px',
        padding: '1.1em 1em',
        '&:hover': {
            color: "#fed136",
        }
    },
    navLink: {
        textDecoration: 'none',
    }
}))

const PatientCabinetAppBar = props => {
    const classes = useStyles()
    const history = useHistory()

    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = e => { 
        setAnchorEl(e.currentTarget);
        setOpen(true)
    }
    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false)
    }

    const logout = () => {
        localStorage.removeItem('token')
        history.push('/')
    }

    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <Typography className={classes.title}>SAIMED</Typography>
                    <Link to='/cabinet' className={classes.navLink}>
                        <Button className={classes.navButton}>Мои записи</Button>
                    </Link>
                    <Link to='/cabinet/makeAppointment' className={classes.navLink}>
                        <Button className={classes.navButton}>Записаться</Button>
                    </Link>
                    <div className={classes.flexGrow}></div>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        onClick={handleOpen}
                        color="inherit"
                    >
                        <AccountCircle className={classes.iconDecription} />
                    </IconButton>
                </Toolbar>
            </Container>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}
            >
                <Grid item xs={12}>
                    <List>
                        <ListItem>
                            <Button href="#appointments" className={classes.popoverWidth}>
                                Редактировать
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Button href="#appointments" className={classes.popoverWidth} onClick={logout}>
                                Выйти
                            </Button>
                        </ListItem>
                    </List>
                </Grid>
            </Popover>
      </AppBar>
    )
}

export default PatientCabinetAppBar