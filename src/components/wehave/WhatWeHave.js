import {Container, Typography } from '@material-ui/core'
import React from 'react'
import { WhatWeHaveStyle } from './WhatWeHaveStyle'

function WhatWeHave(props) {
    const classes = WhatWeHaveStyle(props);
    return (
        <div className={classes.main}>
            <Container maxWidth="lg">
            <Typography variant='h4' className={classes.title}>What We Have</Typography>
            <div style={{display:'flex'}}>
            <Typography variant='subtitle2' className={classes.offers} style={{fontWeight:'600'}}> RECHARGE : </Typography>
            <Typography variant='subtitle2' className={classes.offers1}>Paytm Offers | PhonePe Offers | FreeCharge Coupons | MobiKwik Offers | Amazon Pay Coupons | Google Pay Offers</Typography>
            </div>

            <div style={{display:'flex'}}>
            <Typography variant='subtitle2' className={classes.offers} style={{fontWeight:'600'}}> WALLET OFFERS : </Typography>
            <Typography variant='subtitle2' className={classes.offers1}> Amazon Pay | Paypal | Paytm | Mobikwik | PayZapp</Typography>
            </div>


            <div style={{display:'flex'}}>
            <Typography variant='subtitle2' className={classes.offers} style={{fontWeight:'600'}}> TRAVEL : </Typography>
            <Typography variant='subtitle2' className={classes.offers1}>Makemytrip Coupons | OYO Rooms Coupons | HappyEasyGo Coupons | Cleartrip Coupons | redBus Coupons | Goibibo Coupons | Uber Coupons</Typography>
            </div>



            

            <div style={{display:'flex'}}>
            <Typography variant='subtitle2' className={classes.offers} style={{fontWeight:'600'}}> GROCERY : </Typography>
            <Typography variant='subtitle2' className={classes.offers1}>Bigbasket Coupons | Grofers Offers | FreshtoHome Coupons</Typography>
            </div>
            


            <div style={{display:'flex'}}>
            <Typography variant='subtitle2' className={classes.offers} style={{fontWeight:'600'}}> FASHION : </Typography>
            <Typography variant='subtitle2' className={classes.offers1}>Myntra Coupons | Shoppers Stop Coupons | NNNOW Coupons | AJIO Coupons | Zivame Coupons | Jabong Coupons | Clovia Coupons</Typography>
            </div>

<div style={{display:'flex'}}>
<Typography variant='subtitle2' className={classes.offers} style={{fontWeight:'600'}}> MOBILES & TABLETS : </Typography>
<Typography variant='subtitle2' className={classes.offers1}>Flipkart Offers | Amazon Offers | Paytm Mall Coupons | TataCliQ Coupons | Snapdeal Coupons | Samsung Coupons | ShopClues Coupons</Typography>
</div>


<div style={{display:'flex'}}>
            <Typography variant='subtitle2' className={classes.offers} style={{fontWeight:'600'}}> COMPUTERS, LAPTOPS & GAMING : </Typography>
            <Typography variant='subtitle2' className={classes.offers1}>Mobile Premier league(MPL) Coupons |Rummy Coupons |Gamezy Coupons</Typography>
            </div>
            

            <div style={{display:'flex'}}>
            <Typography variant='subtitle2' className={classes.offers} style={{fontWeight:'600'}}> FOOD & DINING : </Typography>
            <Typography variant='subtitle2' className={classes.offers1}> Swiggy Coupons | McDonald's Coupons | Domino's Coupons | Pizza Hut Offers | KFC Coupons | Zomato Coupons | Foodpanda Coupons</Typography>
            </div>
            

            <div style={{display:'flex'}}>
            <Typography variant='subtitle2' className={classes.offers} style={{fontWeight:'600'}}> BEAUTY & HEALTH : </Typography>
            <Typography variant='subtitle2' className={classes.offers1}>PharmEasy Coupons | HealthKart Coupons | Medlife Coupons | 1MG Coupons | Netmeds Coupons | Nykaa Coupons | Apollo Pharmacy</Typography>
            </div>

            <div style={{display:'flex'}}>
            <Typography variant='subtitle2' className={classes.offers} style={{fontWeight:'600'}}> BANK OFFERS : </Typography>
            <Typography variant='subtitle2' className={classes.offers1}>Axis Bank | SBI Bank | HDFC Bank | Yes Bank | ICICI Bank</Typography>
            </div>
            

            <div style={{display:'flex'}}>
            <Typography variant='subtitle2' className={classes.offers} style={{fontWeight:'600'}}> EVENT OFFERS : </Typography>
            <Typography variant='subtitle2' className={classes.offers1}>COVID-19 | Republic Day Offers | End of Season Sale Coupons and Offers | Diwali Coupons and Offers | Flipkart Big Billion Days Coupons and Offers | Valentine's Day Offers</Typography>
            </div>
            

            <div style={{display:'flex'}}>
            <Typography variant='subtitle2' className={classes.offers} style={{fontWeight:'600'}}> HANDPICKED STORE OFFERS : </Typography>
            <Typography variant='subtitle2' className={classes.offers1}>Amazon Offers | Domino's Pizza Offers | McDonald's Offers | Flipkart Offers | MakeMyTrip Offers | Swiggy Offers</Typography>
            </div>
            

          
            </Container>
        </div>
    )
}

export default WhatWeHave
