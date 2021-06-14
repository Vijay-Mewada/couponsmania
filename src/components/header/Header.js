import { Grid, AppBar, Toolbar, IconButton, Typography, InputBase, Badge , MenuItem, Menu } from '@material-ui/core'
import React, { useState, useEffect, useContext } from "react";
import { HeaderStyles } from './HeaderStyles'
import SearchIcon from '@material-ui/icons/Search';
// import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../../images/logo.png'
import { FormControl, NativeSelect } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { get, post } from "../../api/serverRequest";
import Context from "../../store/context";



function Header(props) {
    const classes = HeaderStyles(props);
    const { globalState, globalDispatch } = useContext(Context)
    const [searchInput, setSearchInput] = useState([]);
    const [searchBy, setSearchBy] = useState('all');


      // call every time the checkbox change (cgecked or not checked)
  useEffect(async () => {
    // get coupons on based on category checked
    if (searchInput && searchInput.length) {
      // globalDispatch({ type: 'SET_LOADER_STATE', payload: true })
      let res = await post("/coupon/getCouponsBySearch", { searchParams: searchInput, searchBy });
      if (res && res.data && res.data.content) {
        let data = res.data.content
        // set global state to set coupons list for global use
        globalDispatch({ type: 'ADD_COUPONS', payload: data })
        globalDispatch({ type: 'SET_LOADER_STATE', payload: false })
      }
      else{
        globalDispatch({ type: 'SET_LOADER_STATE', payload: false })
      }
    }
    //  get all coupons in case none of the category checkbox selected
    else if(searchInput.length == 0){
      globalDispatch({ type: 'SET_LOADER_STATE', payload: true })
      let res = await get("/coupon/getAllCoupon");
      if (res && res.data && res.data.content && res.data.content.length) {
        let data = res.data.content
        // set global state to set coupons list for global use
        globalDispatch({ type: 'ADD_COUPONS', payload: data })
        globalDispatch({ type: 'SET_LOADER_STATE', payload: false })
      }
      else {
        globalDispatch({ type: 'SET_LOADER_STATE', payload: false })
      }
    }
  }, [searchInput])


  // handle search by click 
  const handleSearchByCLick = (e)=>{
    setSearchBy(e.target.value)

  }
    return (
        <Grid>
            <AppBar position="fixed" style={{background:"#635b5b"}}>
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          > */}
               {/* <MenuIcon /> */}
               <img className={classes.logo} src={Logo} alt='logo'/>
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
          onChange = {(e)=>handleSearchByCLick(e)}
          inputProps={{
            name: 'name',
            id: 'uncontrolled-native',
          }}
        >
          <option value="all">All</option>
          <option value="store">Store</option>
          <option value="category">Category</option>
          <option value="subcategory">Subcategory</option>
        </NativeSelect>
      </FormControl>


            <InputBase
              placeholder=" Search for Coupon like amazon"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value = {searchInput}
              onChange = {(e)=>setSearchInput(e.target.value)}
            />
             <Grid className={classes.searchIcon}>
              <SearchIcon/>
            </Grid>
          </Grid>          
          <Grid className={classes.social}>
          <Typography className={classes.socialicon} variant="subtitle" noWrap>
            Follow us on :
          </Typography><br/>
            
              <FacebookIcon  className={classes.socialicon}/>&nbsp;
              <InstagramIcon className={classes.socialicon}/>&nbsp;
              <TwitterIcon  className={classes.socialicon}/>&nbsp;
           
          </Grid>
        </Toolbar>
      </AppBar>
      
        </Grid>
    )
}

export default Header
