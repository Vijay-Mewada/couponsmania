import { Grid, Typography } from "@material-ui/core";
import React, {useState, useEffect, useContext} from "react";
import { AllCategoriesStyles } from "./AllCategoriesStyles";
import Context from '../../store/context'
import { get, post, serverImageUrl } from "../../api/serverRequest";
import Back from "../../../src/images/category.png";

  const AllCategories = (props) => {
  const classes = AllCategoriesStyles(props);
  const { globalState, globalDispatch } = useContext(Context);
  const [navKeyList, setNavKeyList] = useState({});

  useEffect(async () => {
    let cateRes = await get("/coupon/getAllCategoryAndSubcat");
    if (cateRes && cateRes.data && cateRes.data.content) {
      var catData = cateRes.data.content
      var data = catData.reduce((prev, t, index, arr) => {
        if (typeof prev[t.category_name] === 'undefined') {
          prev[t.category_name] = [];
        }
        prev[t.category_name].push(t);
        return prev;
      }, {});
      setNavKeyList(data)
    }

  }, [])
  const hundleClickCategory = async (category) => {
    console.log(category)
  }

  
 
  const rendercatAndsubcatDrop = () => {
    const categoryKey = Object.keys(navKeyList)
    return categoryKey && categoryKey.map((cateKey, index) => {
      return <Grid key={index} xl={4}>
        <li className={classes.categoryli} onClick={ () => hundleClickCategory(cateKey)}>{cateKey} </li>
        {navKeyList && navKeyList[cateKey].map((subcat, ind) => {
          return <li key = {ind} className={classes.subcategoryli} > {subcat.subcategory_name}</li>
        })}
      </Grid>
    })
  }

  return (
    <div>
     <Grid container className={classes.jumbotron}>
        <Grid xs={4} style={{ display: "flex" }}>
          <Typography variant="h2" className={classes.text}>
            Categories
          </Typography>
        </Grid>
        <Grid xs={4} style={{ display: "flex" }}>
          <div style={{ margin: "auto" }}>
            <img
              src={Back}
              alt="coupon all merchant"
              className={classes.merchants}
            />
          </div>
        </Grid>
        <Grid xs={4} style={{ display: "flex" }}>
          <Typography variant="h2" className={classes.text}>
            Sub-Categories
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
       
        <ul className={classes.ul}>
                      {/* <div className={classes.category}> */}
                      <Grid container spacing={0}>
                       {rendercatAndsubcatDrop()}
                      </Grid>
                    </ul>
     

        {/* <Grid xl={2}>
          <ul className={classes.ul}>
            <li className={classes.categoryli}>Recharge </li>
            <li className={classes.subcategoryli}> Mobile Recharge</li>
            <li className={classes.subcategoryli}> DTH Recharge</li>
            <li className={classes.subcategoryli}> Bill Payment</li>
          </ul>
        </Grid>

        <Grid xl={2}>
          <ul className={classes.ul}>
            <li className={classes.categoryli}>Recharge </li>
            <li className={classes.subcategoryli}> Mobile Recharge</li>
            <li className={classes.subcategoryli}> DTH Recharge</li>
            <li className={classes.subcategoryli}> Bill Payment</li>
          </ul>
        </Grid>

        <Grid xl={2}>
          <ul className={classes.ul}>
            <li className={classes.categoryli}>Recharge </li>
            <li className={classes.subcategoryli}> Mobile Recharge</li>
            <li className={classes.subcategoryli}> DTH Recharge</li>
            <li className={classes.subcategoryli}> Bill Payment</li>{" "}
            <li className={classes.subcategoryli}> Mobile Recharge</li>
            <li className={classes.subcategoryli}> DTH Recharge</li>
            <li className={classes.subcategoryli}> Bill Payment</li>{" "}
            <li className={classes.subcategoryli}> Mobile Recharge</li>
            <li className={classes.subcategoryli}> DTH Recharge</li>
            <li className={classes.subcategoryli}> Bill Payment</li>
          </ul>
        </Grid>

        <Grid xl={2}>
          <ul className={classes.ul}>
            <li className={classes.categoryli}>Recharge </li>
            <li className={classes.subcategoryli}> Mobile Recharge</li>
            <li className={classes.subcategoryli}> DTH Recharge</li>
            <li className={classes.subcategoryli}> Bill Payment</li>
          </ul>
        </Grid>

        <Grid xl={2}>
          <ul className={classes.ul}>
            <li className={classes.categoryli}>Recharge </li>
            <li className={classes.subcategoryli}> Mobile Recharge</li>
            <li className={classes.subcategoryli}> DTH Recharge</li>
            <li className={classes.subcategoryli}> Bill Payment</li>
            <li className={classes.subcategoryli}> Mobile Recharge</li>
            <li className={classes.subcategoryli}> DTH Recharge</li>
            <li className={classes.subcategoryli}> Bill Payment</li>
          </ul>
        </Grid>

        <Grid xl={2}>
          <ul className={classes.ul}>
            <li className={classes.categoryli}>Recharge </li>
            <li className={classes.subcategoryli}> Mobile Recharge</li>
            <li className={classes.subcategoryli}> DTH Recharge</li>
            <li className={classes.subcategoryli}> Bill Payment</li>
          </ul>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default AllCategories;
