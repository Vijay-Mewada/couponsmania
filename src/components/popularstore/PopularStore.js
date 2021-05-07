import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import Amazon from "../../images/amazonlogo.jpg";
import Flipkart from "../../images/flipartlogo.png";
import Jiologo from "../../images/jiologo.png";
import Freecharge from "../../images/freechargelogo.png";
import { PopularStoreStyles } from "./PopularStoreStyles"

function PopularStore(props) {
    const classes = PopularStoreStyles(props);
  return (
    <Grid className={classes.root}>
      <Typography variant="h4">
        <span className={classes.headingtitle}>POPULAR</span> STORE
      </Typography>
      <Grid item  container spacing={2}>
      <Grid item  xl={2}>
      
      <Paper className={classes.paper}>
      
          


        <img src={Amazon} className={classes.brand} alt="brand" />
        
        </Paper>
       
        </Grid>

        <Grid item  xl={2}>
      <Paper className={classes.paper}>
        <img src={Flipkart} className={classes.brand} alt="brand" />
        </Paper>
        </Grid>


        <Grid item  xl={2}>
      <Paper className={classes.paper}>
        <img src={Jiologo} className={classes.brand} alt="brand" />
        </Paper>
        </Grid>


        <Grid item  xl={2}>
      <Paper className={classes.paper}>
        <img src={Freecharge} className={classes.brand} alt="brand" />
        </Paper>
        </Grid>


        <Grid item  xl={2}>
      <Paper className={classes.paper}>
        <img src={Amazon} className={classes.brand} alt="brand" />
        </Paper>
        </Grid>


        <Grid item  xl={2}>
      <Paper className={classes.paper}>
        <img src={Amazon} className={classes.brand} alt="brand" />
        </Paper>
        </Grid>


    
      </Grid>
    
    </Grid>
  );
}

export default PopularStore;
