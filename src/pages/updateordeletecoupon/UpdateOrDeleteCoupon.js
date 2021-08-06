import { Grid, Typography, Paper, Table, TableCell, TableHead, TableRow, TableBody, Button } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react'
import Back from "../../../src/images/&.png";
import {UpdateOrDeleteCouponStyles} from './UpdateOrDeleteCouponStyles'
import imagePath from "../../../src/images/amazonlogo.jpg"
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


      <Grid xl={12} className={classes.paprcntr}>
            <Paper
              className={classes.offerpaper}
              
            >
              {/* <div className={classes.li}>
                <img
                  src={imagePath}
                  alt="amazon offer store"
                  className={classes.companyimg}
                />
                &emsp;
                <Typography variant="h6" className={classes.cmpnm}>Amazon
                   <br />
                  <span className={classes.offeravailable}>
                    Offers Available
                  </span>
                </Typography>
              </div> */}

<Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.theading}>Company</TableCell>
            <TableCell className={classes.theading} align="center">Company Name</TableCell>
            <TableCell className={classes.theading} align="center">Coupon Tittle</TableCell>
            <TableCell className={classes.theading} align="center">Coupon Discription</TableCell>
            <TableCell className={classes.theading} align="center">Coupon Code</TableCell>
            <TableCell className={classes.theading} align="center">Redirecting URL</TableCell>
            <TableCell className={classes.theading} align='center'>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow>
              <TableCell component="th" scope="row">
             
                <img
                  src={imagePath}
                  alt="amazon offer store"
                  className={classes.companyimg}
                />              
              </TableCell>
              <TableCell align="center"><b>Amazon</b></TableCell>
              <TableCell align="center">Tittle</TableCell>
              <TableCell align="center">Discription</TableCell>
              <TableCell align="center">Code</TableCell>
              <TableCell align="center">URL</TableCell>
              <TableCell align="center"><Button><EditIcon/></Button> &nbsp; <Button><DeleteIcon/></Button></TableCell>
            </TableRow>
        
        </TableBody>
        </Table>
            </Paper>

            <Paper
              className={classes.offerpaper}
              
            >
              <Table>


        </Table>
            </Paper>

            
          </Grid>
        </div>
    )
}

export default UpdateOrDeleteCoupon
