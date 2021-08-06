import { Grid, Typography, Paper, Table, TableCell, TableHead, TableRow, TableBody, Button } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import React,{useState, useEffect, useContext} from 'react'
import Back from "../../../src/images/&.png";
import Amazon from "../../../src/images/amazonlogo.jpg";
import {UpdateOrDeleteCouponStyles} from './UpdateOrDeleteCouponStyles'
import Context from "../../store/context";
import Loader from "../../components/loader/Loader";
import { post, get, serverImageUrl } from "../../api/serverRequest";

import imagePath from "../../../src/images/amazonlogo.jpg"
const UpdateOrDeleteCoupon = (props) => {
    const classes = UpdateOrDeleteCouponStyles(props);  
    const [couponsList, setCouponsList] = useState([]);
  const { globalState, globalDispatch } = useContext(Context);


  useEffect(async () => {
    let res = await get("/coupon/getAllCoupon");
    if (res && res.data && res.data.content && res.data.content.length) {
      setCouponsList(res.data.content);
      let data = res.data.content;
      // set global state to set coupons list for global use
      globalDispatch({ type: "ADD_COUPONS", payload: data });
      globalDispatch({ type: "SET_LOADER_STATE", payload: false });
    }
    else if( res && res.data && res.data.is_success == false){
      globalDispatch({ type: "ADD_COUPONS", payload: [] });
      globalDispatch({ type: "SET_LOADER_STATE", payload: false });

    }
  }, []);



  const renderCouponsList = () => {
    return (
      globalState && globalState.couponsList && globalState.couponsList.length ?
      globalState.couponsList.map((itm, ind) => {
        // return couponsList && couponsList.map((itm, ind) => {
        // append image with server image url to show or show default url
        let imagePath =
          itm.image && itm.image !== ""
            ? `${serverImageUrl}/${itm.image}`
            : Amazon;
        return (
          // <Grid container>
         

<TableRow>
              <TableCell component="th" scope="row">
             
                <img
                  src={imagePath}
                  alt="Coupons"
                  className={classes.companyimg}
                />              
              </TableCell>
              <TableCell align="center"><b>{itm.company_name}</b></TableCell>
              <TableCell align="center">{itm.title}</TableCell>
              <TableCell align="center">{itm.description}</TableCell>
              <TableCell align="center">{itm.code}</TableCell>{console.log(itm)}
              <TableCell align="center">{itm.couponUrl}</TableCell>
              <TableCell align="center"><Button><EditIcon/></Button> &nbsp; <Button><DeleteIcon/></Button></TableCell>
            </TableRow>
         
        );
      }) : <Grid xs={12} sm={12} md={12} lg={12} xl={12} style={{textAlign : 'center'}}>
      <h3>{'No Coupons Available'}</h3>
    </Grid>
    );
  };

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
         
            {/* <TableRow>
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
              <TableCell align="center">www.amazon.in/yrggr/54rggfcd/mkjifgh/9psv</TableCell>
              <TableCell align="center"><Button><EditIcon/></Button> &nbsp; <Button><DeleteIcon/></Button></TableCell>
            </TableRow> */}
        
              
           
            {renderCouponsList()}
           
        


        </TableBody>
        </Table>
            </Paper>

            {/* <Paper
              className={classes.offerpaper}
              
            >
              <Table>


        </Table>
            </Paper> */}

            
          </Grid>
        </div>
    )
}

export default UpdateOrDeleteCoupon
