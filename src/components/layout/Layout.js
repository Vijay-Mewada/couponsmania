import { Grid } from "@material-ui/core";
import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
// test
function Layout({ children }) {
  return (
    <Grid>
      <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
        <Header />
      </Grid>
      <Grid container spacing={0}>
          <Grid xs={12} sm={6} md={3} lg={3} xl={2}>
          <Sidebar />
          </Grid>
          <Grid xs={12} sm={6} md={9} lg={9} xl={10}>
          <main>{children}</main>
          </Grid>
      </Grid>

    
      
     

      <Footer />
    </Grid>
  );
}

export default Layout;
