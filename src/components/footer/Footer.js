import { Grid, Typography } from '@material-ui/core';
import React from 'react'
import { FooterStyles } from './FooterStyles'
import Logo from '../../images/logo.png' 
import { Link } from 'react-router-dom'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Footer(props) {
    const classes = FooterStyles(props);
    return (
        <Grid container className={classes.root}>
            <Grid lg={4} xl={4} sm={12} md={4}>
            <img src={Logo} alt='logo'/>
            <Typography className={classes.title} variant="h6" noWrap>
            oupon
          </Typography>
          <Typography className={classes.title1} variant="h6" noWrap>
            ania
          </Typography>
          <Link className={classes.footlink} to='/couponsmania/uploadcoupon'>Home</Link><br/>
          <Link className={classes.footlink} to='/couponsmania/uploadcoupon'>About Us</Link><br/>
          <Link className={classes.footlink} to='/couponsmania/uploadcoupon'>Contact Us</Link><br/>
          <Link className={classes.footlink} to='/couponsmania/uploadcoupon'>Contact Us</Link><br/>
            </Grid>
            <Grid lg={4} xl={4} sm={12} md={4}>
            <Typography variant="h6" noWrap>
            Contact
          </Typography>
         <PhoneIcon /> +919074993859<br/>
         &emsp;&emsp;+919685891345<br/>
         <EmailIcon/> Vijaymewada2012@gmail.com<br/>
         <LocationOnIcon/>Khajuri Sadak, Bhopal
            </Grid>
            <Grid lg={4} xl={4} sm={12} md={4}>
            <Typography variant="h6" noWrap>Browse Offers</Typography>
            <Link className={classes.footlink} to='/couponsmania/uploadcoupon'>Stores</Link><br/>
          <Link className={classes.footlink} to='/couponsmania/uploadcoupon'>Categories</Link><br/>
          <Link className={classes.footlink} to='/couponsmania/uploadcoupon'>Contact Us</Link><br/>
          <Link className={classes.footlink} to='/couponsmania/uploadcoupon'>Contact Us</Link><br/>
            </Grid>
            <Grid lg={12} xl={12} sm={12} md={12}>
            <hr/>
              <Typography variant='subtitle2' style={{textAlign:"center"}}>All rights reserved. &copy; Couponsmania.in</Typography>

            </Grid>
        </Grid>
    )
}

export default Footer
