import React, { useState, useEffect, useContext } from "react";
import Moment from "moment";
import { Box, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { MainStyles } from "./MainStyles";
import Amazon from "../../images/amazonlogo.jpg";
import Flipkart from "../../images/flipartlogo.png";
import Freecharge from "../../images/freechargelogo.png";
import Logo from "../../images/logo.gif";
import PopularStore from "../popularstore/PopularStore";
import { post, get, serverImageUrl } from "../../api/serverRequest";
import PropTypes from "prop-types";
import Context from "../../store/context";
import Loader from "../loader/Loader";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { CancelScheduleSendOutlined } from "@material-ui/icons";
import CloseIcon from '@material-ui/icons/Close';

function Main(props) {
  const classes = MainStyles(props);
  const [couponsList, setCouponsList] = useState([]);
  const { globalState, globalDispatch } = useContext(Context);
  const [isCouponsPopupOpen, setIsCouponsPopupOpen] = React.useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState({});
  // const [selectedDesc, setSelectedDesc] = useState('');
  // const [selectedCode, setSelectedCode] = useState('');
  // const [selectedImage, setSelectedImage] = useState('');


  const handleClickOpen = (item) => {
    if (item && item.id) {
      setSelectedCoupon(item)
      setIsCouponsPopupOpen(true);
    }
    
    
  };
  const handleClose = () => {
    setIsCouponsPopupOpen(false);
    setSelectedCoupon({})
  };


  // componentdidmountto
  useEffect(async () => {
    let res = await get("/coupon/getAllCoupon");
    if (res.data && res.data.content && res.data.content.length) {
      setCouponsList(res.data.content);
      let data = res.data.content;
      // set global state to set coupons list for global use
      globalDispatch({ type: "ADD_COUPONS", payload: data });
      globalDispatch({ type: "SET_LOADER_STATE", payload: false });
    }
  }, []);

  const renderCouponsList = () => {
    return (
      globalState.couponsList &&
      globalState.couponsList.map((itm, ind) => {
        // return couponsList && couponsList.map((itm, ind) => {
        // append image with server image url to show or show default url
        let imagePath =
          itm.image && itm.image !== ""
            ? `${serverImageUrl}/${itm.image}`
            : Amazon;
        return (
          // <Grid container>
          <Grid xs={12} sm={6} md={6} lg={4} xl={2}>
            <Card className={classes.card}>
              <CardActionArea>
                <Grid style={{ display: "flex" }}>
                  <img
                    className={classes.companylogo}
                    src={imagePath}
                    alt="company logo"
                  />

                </Grid>

                <hr style={{ color: "rgba(0, 0, 0, 0.1)" }} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.companyname}
                  >
                    {itm.company_name}
                    {/* {itm.title} */}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h2">
                    {itm.category_name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.description}
                  >
                    {itm.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" className={classes.coupanbtn} onClick={() => handleClickOpen(itm)}>
                  <div style={{ position: "absolute", backgroundColor: "#635b5b" }}>Get Coupon</div>
              Get Coupon
                <div className={classes.corner}></div>
                </Button>

                {/* 
                <div
                  class="offer-get-code-link cpnbtn"
                  onclick="CD.c.util.logUserAction('offer-click', null, '3JoZMaavss')"
                  data-offer-key="offerGetCodeBtnText"
                  data-offer-value="&amp; GET CODE"
                  data-id="3JoZMaavss"
                >
                  
                  ATO <div class="p1"></div>
                  <div class="p2">
                    <div class="t1"></div>
                    <div class="t1">
                      <div class="t2"></div>
                    </div>
                  </div>
                  <span>Show Coupon Code</span>
                </div> */}
              </CardActions>
            </Card>


            {/****************************  Coupon Code Popup ******************************/}
            {
              //  render popup in case it is open
              selectedCoupon && selectedCoupon.id ?
                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={isCouponsPopupOpen} >
                  <DialogTitle id="customized-dialog-title" onClose={handleClose} >
                    <div className={classes.dialog}>
                      <img src={`${serverImageUrl}/${selectedCoupon.image}`} alt='Coupon Code' className={classes.couponcodeimage} /><br />
                      <CloseIcon className={classes.closeicon} onClick={handleClose} />
                    </div>
                    <div className={classes.dialog}>

                      <Typography variant='title' className={classes.companyname1}>{selectedCoupon.company_name}</Typography><br />
                    </div>
                    {/* <div className={classes.dialog}>
         <Typography variant='title' className={classes.companyname1}>{selectedCoupon.title}</Typography><br/>
         </div> */}


                  </DialogTitle>
                  <DialogContent dividers>
                    <Typography variant='h4' className={classes.companyname1}>{selectedCoupon.description}</Typography><br />
                    <div className={classes.dialog}>
                      <div className={classes.codebordr}>
                        <Grid xs={6} style={{ display: 'flex' }}>
                          <Typography variant='tile' className={classes.couponcode}>{selectedCoupon.code}</Typography>
                        </Grid>
                        <Grid xs={6} className={classes.dialog}>
                          <Button variant='primary' className={classes.codebtn}>Copy Code</Button>

                        </Grid>

                      </div>&emsp;&emsp;
              <Button className={classes.redirectbtn}>GO</Button>
                    </div>
                    {/* </div>
          <div className={classes.codebordr}><Typography title='copy code' className={classes.couponcode}>{itm.code}&emsp;&nbsp;
            <Button variant='primary' className={classes.codebtn}>Copy</Button>
          </Typography></div> */}
                    {/* <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </Typography> */}
                  </DialogContent>
                  {/* <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions> */}
                </Dialog>

                :
                null
            }
          </Grid>
        );
      })
    );
  };
  return (
    <Grid container spacing={2}>
      {/*  render all coupons list */}
      {renderCouponsList()}
      <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
        <PopularStore />
        {globalState.isLoading == true ? <Loader /> : null}
      </Grid>
    </Grid>
  );
}

export default Main;
