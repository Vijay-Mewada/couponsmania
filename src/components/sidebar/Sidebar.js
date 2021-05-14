import { Card, Grid, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { SidebarStyles } from "./Sidebarstyles";
import Checkbox from "@material-ui/core/Checkbox";
import { get } from "../../api/serverRequest";

function Sidebar(props) {
  const classes = SidebarStyles(props);
  const [checkBoxStatus, setCheckBoxStatus] = useState(false);
  const [categoryList, setcategoryList] = useState([]);
  const [categoryIds, setCategoryIds] = useState([]);

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
  useEffect(() => {
    console.log(categoryIds);
    
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
      <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
        <Card className={classes.card}>
          <Typography variant="h6">Categories</Typography>

          {/*  render category filter on side bar */}
          {renderCategoryFilter()}
        </Card>



      </Grid>
    </Grid>
  );
}

export default Sidebar;
