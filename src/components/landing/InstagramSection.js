import React from 'react'
import { makeStyles, createStyles } from '@material-ui/styles'
import { Container, Grid, Typography, CardMedia } from '@material-ui/core';
import doctorImage from '../../img/doctor.jpg'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import backgroundImage4 from '../../img/9.jpg'
import ListSubheader from '@material-ui/core/ListSubheader';
import InfoIcon from '@material-ui/icons/Info';
import backgroundImage from '../../img/8.JPG'
import backgroundImage2 from '../../img/2.JPG'
import GetInstaPost from './FetchPhoto';
import backgroundImage3 from '../../img/3.JPG'
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
const useStyles = makeStyles(theme => createStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      gridList: {
        width: "50%",
      },
      icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },
      titleBar: {
        background:
          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      },
      icon: {
        color: 'white',
      },
    section: {
        background: "white",
        padding: '100px 0',
        textAlign: 'center',
        [theme.breakpoints.down('md')]:{
            paddingTop:"50px",
            width:"200vw",
        },
    },
    textCenter: {
        textAlign: 'center'
    },
    doctorImage: {
        width: '225px',
        height: '225px',
        border: '7px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '50%',
         margin: 'auto',
        [theme.breakpoints.up('sm')]:{
            width: '525px',
            height: '525px',
        },
           [theme.breakpoints.up('lg')]:{
            width: '325px',
            height: '325px',
        }
    },
    sectionHeading: {
        textTransform: 'uppercase',
        fontSize: '40px',
        fontWeight: '700',
        marginTop: '0',
        marginBottom: '15px',
        fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        [theme.breakpoints.up('sm')]:{
            fontSize: '4.5vw',
        },
        [theme.breakpoints.up('lg')]:{
            fontSize: '2.5vw',
        },
    },
    sectionSubheading: {
        fontSize: '16px',
        fontWeight: '400',
        fontStyle: 'italic',
        textTransform: 'none',
        fontFamily: "'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        [theme.breakpoints.between('sm','md')]:{
            marginBottom:"1vw"
        },
        [theme.breakpoints.up('sm')]:{
         fontSize:"4.2vw"
        },
        [theme.breakpoints.up('lg')]:{
            fontSize:"1.2vw"
           }
    },
    doctorIntro: {
        marginTop: '45px',
        marginBottom: '5px',
        fontSize: '1.5rem',
        fontWeight: '700',
        fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        [theme.breakpoints.between('sm','md')]:{
            marginBottom:"1vw"
        },
        [theme.breakpoints.up('sm')]:{
         fontSize:"5.2vw"
        },
        [theme.breakpoints.up('lg')]:{
            fontSize:"1.2vw"
        }
    },
    doctorInfo: {
        fontFamily: "'Roboto Slab', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        [theme.breakpoints.between('sm','md')]:{
            marginBottom:"1vw"
        },
        [theme.breakpoints.up('sm')]:{
         fontSize:"5.2vw"
        },
        [theme.breakpoints.up('lg')]:{
            fontSize:"1.2vw"
        }
    }
}))

const tileData = [
    {
        img: backgroundImage,
        title: 'Image',
        author: 'author',
        featured: true,
    },
    {
        img: backgroundImage2,
        title: 'Image',
        author: 'author',
        featured: true,
    },
      {
        img: backgroundImage3,
        title: 'Image',
        author: 'author',
        featured: true,
    },
    {
        img: backgroundImage4,
        title: 'Image',
        author: 'author',
        featured: true,
    },
];

const InstagramSection = props => {
    const classes = useStyles()
    GetInstaPost();
    return (
    <div id="team" className={classes.section}>
     <Typography variant="h2" className={classes.sectionHeading}>Подписывайтесь на наш блог</Typography>
     <Container>
        <Grid container spacing={6} justify="center" className={classes.textCenter}>
    <Grid item xs={12}>
     <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </Grid>
    </Grid>
    </Container>
    </div>
    )
}

export default InstagramSection