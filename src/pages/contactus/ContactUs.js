import React from "react";
import {
  Grid,
  Typography,
  Paper,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Button,
} from "@material-ui/core";
import Contact from "../../../src/images/contact.jpg";
import { ContactUsStyle } from "./ContactUsStyle";
import PhoneIcon from '@material-ui/icons/Phone';

const ContactUs = (props) => {
  const classes = ContactUsStyle(props);
  return (
    <div>
      <Grid container className={classes.jumbotron}>
        <Grid xs={12} style={{ display: "flex" }}>
          <img
            src={Contact}
            alt="coupon all merchant"
            className={classes.upperimg}
          />
        </Grid>
      </Grid>

      <Grid container className={classes.contactback}>
        <Grid xs={4}>
          <Paper className={classes.offerpaper}>
            <div className={classes.icons}>
            <PhoneIcon/>
            </div>
            Hello Vijay Mewada
          </Paper>
        </Grid>

        <Grid xs={4}>
          <Paper className={classes.offerpaper}>
            Hello Vijay Mewada
          </Paper>
        </Grid>

        <Grid xs={4}>
          <Paper className={classes.offerpaper}>
            Hello Vijay Mewada
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactUs;
