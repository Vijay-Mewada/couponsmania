import { Grid } from '@material-ui/core'
import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom'
import { NavigationStyles } from './NavigationStyles'
import MenuOpenSharpIcon from '@material-ui/icons/MenuOpenSharp';
import Context from "../../store/context";

function Navigation(props) {
    const classes = NavigationStyles(props);
    // get global state implement via context API
    const { globalState, globalDispatch } = useContext(Context)

    
    const handleSidebarStatus = () => {
        // update sidebar status to global state isSidebarOpen
        globalDispatch({ type: 'SET_SIDEBAR_STATUS', payload: !(globalState.isSidebarOpen) })


    }
    return (
        <Grid className={classes.main}>
            <Link className={classes.link} onClick={() => handleSidebarStatus()}><MenuOpenSharpIcon className={classes.sidetoggle} />&nbsp;Filter</Link>
            <Link className={classes.link} to='/couponsmania'>Home</Link>
            <Link className={classes.link} to='/'>Categories</Link>
            <Link className={classes.link} to='/'>Top Store</Link>
            <Link className={classes.link} to='/'>Best offer</Link>
        </Grid>
    )
}

export default Navigation
