import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import Back from "../../../src/images/&.png";
import {UpdateOrDeleteCouponStyles} from './UpdateOrDeleteCouponStyles'

const UpdateOrDeleteCoupon = (props) => {
    const classes = UpdateOrDeleteCouponStyles(props);
    return (
        <div>
           <Grid container className={classes.jumbotron}>
        <Grid xs={4} style={{ display: "flex" }}>
          <Typography variant="h2" className={classes.text}>
            Update
          </Typography>
        </Grid>
        <Grid xs={4} style={{ display: "flex" }}>
          <div style={{ margin: "auto" }}>
            <img
              src={Back}
              alt="coupon all merchant"
              className={classes.merchants}
            />
          </div>
        </Grid>
        <Grid xs={4} style={{ display: "flex" }}>
          <Typography variant="h2" className={classes.text}>
            Delete
          </Typography>
        </Grid>
      </Grid>
        </div>
    )
}

export default UpdateOrDeleteCoupon
