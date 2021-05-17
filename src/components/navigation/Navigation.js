import { Grid } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { NavigationStyles } from './NavigationStyles'
import MenuOpenSharpIcon from '@material-ui/icons/MenuOpenSharp';

function Navigation(props) {
    const classes = NavigationStyles(props);
    return (
        <Grid  className={classes.main}>
            <Link className={classes.link}  ><MenuOpenSharpIcon  className={classes.sidetoggle}/>&nbsp;Filter</Link>
            <Link className={classes.link} to='/couponsmania'>Home</Link>
            <Link className={classes.link} to='/'>Categories</Link>
            <Link className={classes.link} to='/'>Top Store</Link>
            <Link className={classes.link} to='/'>Best offer</Link>            
        </Grid>
    )
}

export default Navigation
