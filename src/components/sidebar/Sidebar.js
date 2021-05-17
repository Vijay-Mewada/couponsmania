import { Card, Grid, Typography } from "@material-ui/core";
import React, { useState, useEffect, useContext } from "react";
import { SidebarStyles } from "./Sidebarstyles";
import Checkbox from "@material-ui/core/Checkbox";
import { get, post } from "../../api/serverRequest";
import Context from "../../store/context";



function Sidebar(props) {
  const classes = SidebarStyles(props);
  // get global state implement via context API
  const { globalState, globalDispatch } = useContext(Context)
  const [checkBoxStatus, setCheckBoxStatus] = useState(false);
  const [categoryList, setcategoryList] = useState([]);
  const [categoryIds, setCategoryIds] = useState([]);
  const [openSidebar, setOpenSidebar] = useState(true);

  const handleChange = (event) => {
    if (event.target.checked == true && event.target.value) {
      setCategoryIds(oldIds => [...oldIds, event.target.value]);
    } else {
      setCategoryIds(categoryIds.filter(item => item !== event.target.value));
    }
    // setTimeout(() => {
    //   console.log(categoryIds);
    // }, 500);
    setCheckBoxStatus(event.target.checked);
  };

  // call every time the checkbox change (cgecked or not checked)
  useEffect(async () => {
    // get coupons on based on category checked
    if (categoryIds && categoryIds.length) {
      let res = await post("/coupon/getCouponsByCategory", { categoryIds: categoryIds });
      if (res && res.data && res.data.content) {
        let data = res.data.content
      // set global state to set coupons list for global use
      globalDispatch({ type: 'ADD_COUPONS', payload: data })
      }
    }
    //  get all coupons in case none of the category checkbox selected
    else if(categoryIds.length == 0 && checkBoxStatus == false){
      let res = await get("/coupon/getAllCoupon");
    if (res.data && res.data.content && res.data.content.length) {
      let data = res.data.content
      // set global state to set coupons list for global use
      globalDispatch({ type: 'ADD_COUPONS', payload: data })
    }
    }
  }, [categoryIds])

  // componennt didmount 
  useEffect(async () => {
    // get all category list
    let res = await get("/coupon/getAllCategory");
    if (res.data && res.data.content && res.data.content.length) {
      setcategoryList(res.data.content)

    }
  }, [])

  // render filter category on sidebar

  const renderCategoryFilter = () => {
    return categoryList && categoryList.map((item, ind) => {
      return <Grid className={classes.rechargectgry}>
        <Typography variant="title" >
          <Checkbox
            color="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
            value={item.id}
            onChange={(e) => handleChange(e)}
          />  {item.name}
        </Typography>
      </Grid>

    })
  }

  return (
    <Grid>
      <Grid xs={12} sm={12} md={12} lg={12} xl={12} >
        {/* get isSidebarOPen status from globalState the sets from navigation */}
        <Card className={globalState && globalState.isSidebarOpen ? classes.card : classes.navigationclose} >
          <Typography variant="h6">Categories</Typography>

          {/*  render category filter on side bar */}
          {renderCategoryFilter()}
        </Card>
      </Grid>
    </Grid>
  );
}

export default Sidebar;
