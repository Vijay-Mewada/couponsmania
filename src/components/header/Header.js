import {
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  MenuItem,
  Menu,
} from "@material-ui/core";
import React from "react";
import { HeaderStyles } from "./HeaderStyles";
import SearchIcon from "@material-ui/icons/Search";
// import MenuIcon from '@material-ui/icons/Menu';
import Logo from "../../images/logo.png";
import { FormControl, NativeSelect } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

function Header(props) {
  const classes = HeaderStyles(props);
  return (
    <Grid>
      <AppBar position="static" style={{ background: "#635b5b" }}>
        <Toolbar>
          {/* <IconButton
            edge="start" 
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          > */}
          {/* <MenuIcon /> */}
          <img src={Logo} alt="logo" />
          {/* </IconButton> */}
          <Typography className={classes.title} variant="h6" noWrap>
            oupon
          </Typography>
          <Typography className={classes.title1} variant="h6" noWrap>
            ania
          </Typography>
          <Grid className={classes.search}>
            <FormControl className={classes.formControl}>
              <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: "name",
                  id: "uncontrolled-native",
                }}
              >
                <option value="">All</option>
                <option value="">Stores</option>
                <option value="">Offers</option>
                <option value="">Categories</option>
              </NativeSelect>
            </FormControl>

            <InputBase
              placeholder=" Search for Coupon like amazon"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
            <Grid className={classes.searchIcon}>
              <SearchIcon />
            </Grid>
          </Grid>
          <Grid>
            <Typography
              className={classes.socialicon}
              variant="subtitle"
              noWrap
            >
              Follow us on :
            </Typography>
            <FacebookIcon />
            &nbsp;
            <InstagramIcon />
            &nbsp;
            <TwitterIcon />
            &nbsp;
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default Header;
