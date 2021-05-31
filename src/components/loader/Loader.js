import React from 'react'
import Background from '../../images/logo.gif'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid, Paper } from '@material-ui/core';
import { LoaderStyles } from "./LoaderStyles";

function Loader(props) {
    const classes = LoaderStyles(props);
    return (
        // <Grid Style={{display:"flex",opacity:'0.9'}}>
            <Paper className={classes.main}  >
                <Paper
                style={{
                    height:"160px", 
     margin:"auto",  
     width: "170px", 
     display:'flex',
     background: "rgba(255, 255, 255)",
     padding:'20px'
                }}
                >
                <CircularProgress className={classes.progress} style={{height:"auto",width:'140px'}}>
               
                </CircularProgress>
              
                </Paper>
            </Paper>
            

    )
}

export default Loader
