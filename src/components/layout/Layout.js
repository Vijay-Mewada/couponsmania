import { Grid } from "@material-ui/core";
import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { LayoutStyles } from './LayoutStyles'

function Layout(props) {
  const classes = LayoutStyles(props);
  return (
    <Grid>
      <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
        <Header />
      </Grid>
      <Grid container spacing={0}>
          <Grid xs={6} sm={3} md={3} lg={3} xl={2} className={classes.layout}>
          <Sidebar />
          </Grid>
          <Grid xs={6} sm={9} md={9} lg={9} xl={10} style={{backgroundColor: "#cafaf8"}}>
          <main >{props.children}</main>
          </Grid>
      </Grid>

    
      
     

      <Footer />
    </Grid>
  );
}

export default Layout;
