import React, { useState, useEffect } from 'react'
import { AppBar, Button, Typography, Toolbar, Container, List, ListItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Scrollspy from 'react-scrollspy';
import classNames from 'classnames';

const useStyles = makeStyles({
    container: {
    },
    toolbar: {
        transition: '0.3s',
        paddingTop: '16px',
        paddingBottom: '16px'
    },
    toolbarShrink: {
        transition: '0.3s',
        paddingTop: '0px',
        paddingBottom: '0px'
    },
    scrollSpy: {
        display: 'flex'
    },
    title: {
        transition: '0.3s',
        fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';",
        fontSize: '1.75em',
        fontWeight: '700',
        display: 'inline-block',
        paddingTop: '.3125rem',
        paddingBottom: '.3125rem',
        marginRight: '1rem',
        lineHeight: '42px',
        whiteSpace: 'nowrap',
        flexGrow: '1',
        color: 'white !important'
    },
    titleShrinkSize: {
        transition: '0.3s',
        fontSize: '1.25em',
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
    userIcon: {
        marginLeft: '10px'
    }
})


const NavbarAuth = props => {
    const [scrolledDown, setScrolledDown] = useState(false)
    const classes = useStyles();
    const { openLoginModal } = props

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100
            if (isTop) {
                setScrolledDown(false)
            } else {
                setScrolledDown(true)
            }
        })
    })

    return (
        <AppBar position="fixed" className={classes.appbar}>
            <Toolbar className={scrolledDown ? classes.toolbarShrink : classes.toolbar}>
                <Container className={classes.container}>
                        <Typography className={classNames(classes.title, scrolledDown ? classes.titleShrinkSize : '')}>
                            SAIMED
                        </Typography>
                        <Button className={classes.navButton} onClick={openLoginModal}>Вход <FontAwesomeIcon icon={faUserCircle} size="2x" className={classes.userIcon}/></Button>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default NavbarAuth

        