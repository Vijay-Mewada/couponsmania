import React, { useState, useEffect } from 'react';
import Moment from "moment";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/layout/Layout";
import { Grid, Paper } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AppStyle } from "./AppStyles";
import Amazon from './images/amazonlogo.jpg'
import Flipkart from './images/flipartlogo.png'
import Freecharge from './images/freechargelogo.png'
import Jio from './images/jiologo.png'
import {post, serverUrl} from './api/serverRequest'

function App(props) {
  const [couponsList, setCouponsList] = useState([]);
  const [couponImageFile, setCouponImageFile] = useState([]);
  const [couponImage, setCouponImage] = useState('');
  const classes = AppStyle(props);
  // componentdidmount
  useEffect(async () => {
    let res = await post("/coupon/getCouponsList", {
      category: 'demo',
    });
    if (res.data && res.data.content && res.data.content.length) {
      setCouponsList(res.data.content)
    }  },[]);

    // render all coupon lists
    const renderCouponsList = () => {
      // return [].map((itm, ind) => {
      return couponsList && couponsList.map((itm, ind) => {
        let validityDate = itm.validity
          ? Moment(itm.validity).format("DD-MM-YYYY")
          : null;
          let imagePath = itm.image_path && itm.image_path !== '' ? `${serverUrl}/images/${itm.image_path}` : Amazon
        return (
          // <div className="col-md-6 col-sm-4 col-xs-12">
          <Grid xs={12} sm={6} md={6} lg={4} xl={3}>
          <Card className={classes.card}>
          <CardActionArea>
            <img
              className={classes.companylogo}
              src={imagePath} 
              // src={Amazon} 
              alt="company logo"
            /> 
            <hr style={{color:"rgba(0, 0, 0, 0.1)"}}/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {itm.category}
              </Typography>
              <Typography gutterBottom variant="h6" component="h2">
                  {itm.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              {itm.description}
              {/* Upto Rs. 50 Amazon Pay Cashback on Payments done via Amazon Pay UPI (New User) */}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            
             <Button size="small" className={classes.coupanbtn} >
              Get Coupon
            </Button>
          </CardActions>
        </Card>
          </Grid>
        );
      });
    };

    const handleFormChange = (event)=>{
      if (event) {
        const { name, value } = event.target;
        setCouponImage(value)
        console.log(event.target.files[0]);
        setCouponImageFile(event.target.files[0])
      }

    }
    const handleCouponUpoadButton = async()=>{
      var fd = new FormData();
      fd.append('image', couponImageFile, couponImageFile.name)
      fd.append('title', 'formTitle')
      fd.append('code', 'formcode')
      fd.append('category', 'demo')
      fd.append('description', 'description  ')      
      let resposne = await post("/coupon/addCoupon", fd);
      console.log('--upload rs---', resposne)

    }

  return (
    <Grid className="App">
      <Layout>
        <Grid container spacing={2}>
          {renderCouponsList()}
        </Grid>
      </Layout>
    </Grid>
  );
}

export default App;
