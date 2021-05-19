import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography } from "@material-ui/core";
import Amazon from "../../images/amazonlogo.jpg";
import Flipkart from "../../images/flipartlogo.png";
import Jiologo from "../../images/jiologo.png";
import Freecharge from "../../images/freechargelogo.png";
import { PopularStoreStyles } from "./PopularStoreStyles";
import { get, serverImageUrl } from '../../api/serverRequest';

function PopularStore(props) {
  const classes = PopularStoreStyles(props);
  const [companyList, setCompanyList ] = useState([])

  // componentdidmount
  useEffect(async () => {
    let popularCompanyList = await get("/coupon/getpopularCompany");
    if (popularCompanyList.data && popularCompanyList.data.content && popularCompanyList.data.content.length) {
      setCompanyList(popularCompanyList.data.content)
    }
  }, []);

//  get all popular (top 5 mostly used) company list 
  const renderPopularCompanyList = () => {
    return companyList && companyList.map((item, ind) => {
      let imagePath = item.image && item.image !== '' ? `${serverImageUrl}/${item.image}` : Amazon

      return <Grid container>
        <Grid item xl={2}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.couponavailable}>{item.coupons_counter} <br /> Coupons Available</Typography>
          <img src={imagePath} className={classes.brand} alt="brand" />
        </Paper>
      </Grid>
      </Grid>
    })
  }
  return (
    <Grid xl={12} className={classes.root}>
      <Typography variant="h4" style={{textAlign:"center"}}>
        <span className={classes.headingtitle}>POPULAR</span> STORE
      </Typography>
      <Grid item container spacing={2}>
        {/* render popular company list */}
      {renderPopularCompanyList()}        
      </Grid>
    </Grid>
  );
}

export default PopularStore;
