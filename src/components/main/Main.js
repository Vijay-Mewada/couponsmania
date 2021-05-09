import React, { useState, useEffect } from 'react';
import Moment from "moment";import { Grid } from "@material-ui/core";
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
import Jio from "../../images/jiologo.png";
import PopularStore from "../popularstore/PopularStore";
import {post, serverImageUrl} from '../../api/serverRequest'

function Main(props) {
  const classes = MainStyles(props);
  const [couponsList, setCouponsList] = useState([]);
  const [couponImageFile, setCouponImageFile] = useState([]);
  const [couponImage, setCouponImage] = useState('');

  // componentdidmount
  useEffect(async () => {
    let res = await post("/coupon/getCouponsList", {
      category: 'demo',
    });
    if (res.data && res.data.content && res.data.content.length) {
      setCouponsList(res.data.content)
    }
  }, []);

  // handle on form change
  const handleFormChange = (event) => {
    if (event) {
      const { name, value } = event.target;
      setCouponImage(value)
      console.log(event.target.files[0]);
      setCouponImageFile(event.target.files[0])
    }

  }

  // handle on form submit
  const handleCouponUpoadButton = async () => {
    var fd = new FormData();
    fd.append('image', couponImageFile, couponImageFile.name)
    fd.append('title', 'formTitle')
    fd.append('code', 'formcode')
    fd.append('category', 'demo')
    fd.append('description', 'description  ')
    let resposne = await post("/coupon/addCoupon", fd);
    console.log('--upload rs---', resposne)

  }


  const renderCouponsList = () => {
    // return [].map((itm, ind) => {
    return couponsList && couponsList.map((itm, ind) => {
      let validityDate = itm.validity
        ? Moment(itm.validity).format("DD-MM-YYYY")
        : null;
        // append image with server image url to show or show default url
      let imagePath = itm.image_path && itm.image_path !== '' ? `${serverImageUrl}/${itm.image_path}` : Amazon
      return (
        <Grid xs={12} sm={6} md={6} lg={4} xl={3}>
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
                <Typography gutterBottom variant="h5" component="h2">
                  {itm.category}
                </Typography>
                <Typography gutterBottom variant="h6" component="h2">
                  {itm.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {itm.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" className={classes.coupanbtn}>
                Get Coupon
            </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  };
  return (
    <Grid container spacing={2}>

      {renderCouponsList()}

      <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
        <PopularStore />
      </Grid>
    </Grid>
  );
}

export default Main;
