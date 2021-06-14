import { Grid, Typography,Button } from '@material-ui/core'
import React from 'react'
import { AllStoresStyles } from './AllStoresStyles'
import Back from '../../../src/images/back.png'

export const AllStores = (props) => {
    const classes = AllStoresStyles(props);
    return (
        <div>
            <Grid container className={classes.jumbotron}>
                <Grid xs={4} style={{display:'flex'}}>
                    <Typography variant="h2" className={classes.text}>All</Typography>
                </Grid>
                <Grid xs={4} style={{display:'flex'}}>
               
                <div style={{margin:'auto'}}>
                <img src={Back} alt='coupon all merchant' style={{height:"250px",margin:"auto"}}/>
                </div>
                </Grid>
                <Grid xs={4} style={{display:'flex'}}>
                <Typography variant="h2" className={classes.text}>Merchants</Typography>
                </Grid>
               
            </Grid>
            <Grid xs={12} >
                    <Button variant='button'>Clear</Button>&emsp; # &emsp; A &emsp; B &emsp; C &emsp; D &emsp; E &emsp; F &emsp; G &emsp; H &emsp; I &emsp; J &emsp; K &emsp; L &emsp; M &emsp; N &emsp; O &emsp; P &emsp; Q &emsp; R &emsp; S &emsp; T &emsp; U &emsp; V &emsp; W &emsp; X &emsp; Y &emsp; Z
                </Grid>
        </div>
    )
}
export default AllStores;
