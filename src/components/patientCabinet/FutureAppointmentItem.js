import React from "react";
import { Grid, Typography, Button, Card } from "@material-ui/core";
import { makeStyles,useTheme } from "@material-ui/styles";
import dateFormat from 'dateformat'
import PatientService from "../../service/PatientService";
import { green, blue, red, yellow } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useEffect } from 'react';
const useStyles = makeStyles(theme => ({
    appointmentContainer: {
        paddingTop: '15px',
        paddingBottom:'15px',
        marginBottom: '10px'
    },
    fabDelete:{
        backgroundColor:red[900],
        width:'100%',
        height:"5vh",
        fontSize:"1.2vw",
        color:"white",
        '&:hover':{
          backgroundColor:"white",
          color:red[500]
        },
        [theme.breakpoints.down('xs')]: {
          display:'none',
        }
      },
      IconEditSize:{
        width:"3vh",
        height:"5vh",
      },
      fabDelIcon:{
        backgroundColor:red[900],
        color:"white",
        display:'none',
       '&:hover':{
          backgroundColor:"white",
          color:red[500]
        },
        [theme.breakpoints.down('xs')]: {
          display:'inline',
          fontSize:'1.4vw'
        },
      },
}))

const FutureAppointmentItem = props => {
    const classes = useStyles()
    const theme = useTheme();
    const { date, startTime, endTime, appointmentId, onCancel } = props
    const matches = useMediaQuery('(min-height:800px) and (min-width:480px)');
    const [SizeBut,SetSizeBut] = React.useState("medium")
    const [justifyType, setJustifyType] = React.useState("space-between")
    const matcheSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const cancelAppointment = async () => {
        try {
            await PatientService.cancelAppointment(appointmentId)
            onCancel()
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        window.addEventListener('load',()=>{
        console.log("matchesSmall:"+ matcheSmall);
          if(!matches)
          {
             SetSizeBut("small");
          }
          else{
            SetSizeBut("medium");
          }
        //   if(matcheSmall)
        //   {
        //     setJustifyType("");
        //   }
        //   else{
        //     setJustifyType("space-between");
        //   }
        })
    })
    return (
        <Card  className={classes.appointmentContainer}>
            <Grid container spacing={3} alignItems="center"> 
                <Grid item xs={9} sm={8} md={8}>
                    <Typography>
                        {dateFormat(date, 'dddd dd mmmm')}, {dateFormat(startTime, 'HH:MM')} - {dateFormat(endTime, 'HH:MM')}
                    </Typography>
                </Grid>
                <Grid item xs={1} sm={3} md={3}>
                    <Fab variant="extended" className={classes.fabDelete} onClick={cancelAppointment}>
                    <DeleteIcon className={classes.IconEditSize}/>
                    Отменить
                    </Fab>
                    <Fab size={SizeBut} className={classes.fabDelIcon} onClick={cancelAppointment}>
                    <DeleteIcon />
                    Отменить
                    </Fab>
                    {/* <Button variant="outlined" onClick={cancelAppointment}>Отменить</Button> */}
                </Grid>
            </Grid>
        </Card>
    );
};

export default FutureAppointmentItem;
