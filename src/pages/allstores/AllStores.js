import { Grid, Typography, Button, Paper } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { AllStoresStyles } from "./AllStoresStyles";
import Back from "../../../src/images/back.png";
import Amazon from "../../../src/images/amazonlogo.jpg";
import { Link } from "react-router-dom";
import Context from "../../store/context";
import { get, post, serverImageUrl } from "../../api/serverRequest";

const alpha = [
  "All",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export const AllStores = (props) => {
  const classes = AllStoresStyles(props);
  const { globalState, globalDispatch } = useContext(Context);

  useEffect(async () => {
    globalDispatch({ type: "SET_LOADER_STATE", payload: true });
    let response = await get("/coupon/getAllCompany");
    if (
      response.data &&
      response.data.content &&
      response.data.content.length
    ) {
      globalDispatch({
        type: "GET_ALL_COMPANIES",
        payload: response.data.content,
      });
      globalDispatch({ type: "SET_LOADER_STATE", payload: false });
    }
  }, []);
  
  const handlePopularStoreClick = async (item) => {
    if (item && item.id) {
      globalDispatch({ type: "SET_LOADER_STATE", payload: true });
      let response = await post("/coupon/getCouponsByCompany", {
        companyId: item.id,
      });
      if (
        response.data &&
        response.data.content &&
        response.data.content.length
      ) {
        globalDispatch({ type: "ADD_COUPONS", payload: response.data.content });
        globalDispatch({ type: "SET_LOADER_STATE", payload: false });
      }
    }
  };

  const handleAlphaClick = async (alphabet) => {
   
    if (alphabet) {
      // globalDispatch({ type: 'SET_LOADER_STATE', payload: true })
      // alphabet = alphabet == 'All' ? "" : alphabet
      let res = await post("/coupon/getCompanyByAlphabet", { alphabet  });
      if (res && res.data && res.data.content) {
        let data = res.data.content
        // set global state to set coupons list for global use
        globalDispatch({
          type: "GET_ALL_COMPANIES",
          payload : data,
        });
        globalDispatch({ type: 'SET_LOADER_STATE', payload: false })
      }
      else{
        globalDispatch({ type: 'SET_LOADER_STATE', payload: false })
      }
    }

  };

  const renderAllCompanies = () => {
    return (
      globalState &&
      globalState.allCompanies &&
      globalState.allCompanies.map((item, ind) => {
        let imagePath =
          item.image && item.image !== ""
            ? `${serverImageUrl}/${item.image}`
            : Amazon;
        return (
          <Grid key={ind} xl={2} className={classes.paprcntr}>
            <Paper
              className={classes.offerpaper}
              onClick={() => {
                handlePopularStoreClick(item);
              }}
            >
              <div className={classes.li}>
                <img
                  src={imagePath}
                  alt="amazon offer store"
                  className={classes.companyimg}
                />
                &emsp;
                <Typography variant="h6" className={classes.cmpnm}>
                  {item.name} <br />
                  <span className={classes.offeravailable}>
                    Offers Available  
                    {/* {console.log(item.coupons_counter)} */}
                  </span>
                </Typography>
              </div>
            </Paper>
          </Grid>
        );
      })
    );
  };

  return (
    <div>
      <Grid container className={classes.jumbotron}>
        <Grid xs={4} style={{ display: "flex" }}>
          <Typography variant="h2" className={classes.text}>
            All
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
            Merchants
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xl={1} lg={1} md={1} sm={1} xs={12} style={{ display: "flex" }}>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "5px auto" }}
            onClick={ () => handleAlphaClick("All")}
          >
            Clear
          </Button>
        </Grid>
        <Grid
          xl={11}
          lg={11}
          md={11}
          sm={11}
          xs={12}
          style={{ display: "flex" }}
        >
        
          {alpha.map((i, key) => {
            return (
              <div style={{ margin: "auto 0px" }} key={key}>
                &emsp;
                <Link
                  className={classes.alphabet}
                  onClick={ () => handleAlphaClick(i)}
                >
                  {i}
                </Link>
              </div>
            );
          })}
          {/* &emsp;<Link className={classes.alphabet}>All </Link>&emsp;
          <Link className={classes.alphabet}> # </Link>&emsp;
          <Link className={classes.alphabet}> A </Link>&emsp;
          <Link className={classes.alphabet}> B </Link>&emsp;
          <Link className={classes.alphabet}> C </Link>&emsp;
          <Link className={classes.alphabet}> D </Link>&emsp;
          <Link className={classes.alphabet}> E </Link>&emsp;
          <Link className={classes.alphabet}> F </Link>&emsp;
          <Link className={classes.alphabet}> G </Link>&emsp;
          <Link className={classes.alphabet}> H </Link>&emsp;
          <Link className={classes.alphabet}> I </Link>&emsp;
          <Link className={classes.alphabet}> J </Link>&emsp;
          <Link className={classes.alphabet}> K </Link>&emsp;
          <Link className={classes.alphabet}> L </Link>&emsp;
          <Link className={classes.alphabet}> M </Link>&emsp;
          <Link className={classes.alphabet}> N </Link>&emsp;
          <Link className={classes.alphabet}> O </Link>&emsp;
          <Link className={classes.alphabet}> P </Link>&emsp;
          <Link className={classes.alphabet}> Q </Link>&emsp;
          <Link className={classes.alphabet}> R </Link>&emsp;
          <Link className={classes.alphabet}> S </Link>&emsp;
          <Link className={classes.alphabet}> T </Link>&emsp;
          <Link className={classes.alphabet}> U </Link>&emsp;
          <Link className={classes.alphabet}> V </Link>&emsp;
          <Link className={classes.alphabet}> W </Link>&emsp;
          <Link className={classes.alphabet}> X </Link>&emsp;
          <Link className={classes.alphabet}> Y </Link>&emsp;
          <Link className={classes.alphabet}> Z</Link> */}
        </Grid>
      </Grid>
      <Grid container>
        {renderAllCompanies()}

        {/* <Grid xl={2} className={classes.paprcntr} >
          <Paper className={classes.offerpaper}>
            <div className={classes.li}>
              <img
                src={Amazon}
                alt="amazon offer store"
                className={classes.companyimg}
              />
              &emsp;
              <Typography variant="h6" className={classes.cmpnm}>
                Amazon <br />
                <span className={classes.offeravailable}>
                  10 Offers Available
                </span>
              </Typography>
            </div>
          </Paper>
        </Grid>

        <Grid xl={2} className={classes.paprcntr} >
          <Paper className={classes.offerpaper}>
            <div className={classes.li}>
              <img
                src={Amazon}
                alt="amazon offer store"
                className={classes.companyimg}
              />
              &emsp;
              <Typography variant="h6" className={classes.cmpnm}>
                Amazon <br />
                <span className={classes.offeravailable}>
                  10 Offers Available
                </span>
              </Typography>
            </div>
          </Paper>
        </Grid>

        <Grid xl={2} className={classes.paprcntr} >
          <Paper className={classes.offerpaper}>
            <div className={classes.li}>
              <img
                src={Amazon}
                alt="amazon offer store"
                className={classes.companyimg}
              />
              &emsp;
              <Typography variant="h6" className={classes.cmpnm}>
                Amazon <br />
                <span className={classes.offeravailable}>
                  10 Offers Available
                </span>
              </Typography>
            </div>
          </Paper>
        </Grid>

        <Grid xl={2} className={classes.paprcntr} >
          <Paper className={classes.offerpaper}>
            <div className={classes.li}>
              <img
                src={Amazon}
                alt="amazon offer store"
                className={classes.companyimg}
              />
              &emsp;
              <Typography variant="h6" className={classes.cmpnm}>
                Amazon <br />
                <span className={classes.offeravailable}>
                  10 Offers Available
                </span>
              </Typography>
            </div>
          </Paper>
        </Grid>

        <Grid xl={2} className={classes.paprcntr} >
          <Paper className={classes.offerpaper}>
            <div className={classes.li}>
              <img
                src={Amazon}
                alt="amazon offer store"
                className={classes.companyimg}
              />
              &emsp;
              <Typography variant="h6" className={classes.cmpnm}>
                Amazon <br />
                <span className={classes.offeravailable}>
                  10 Offers Available
                </span>
              </Typography>
            </div>
          </Paper>
        </Grid>

        <Grid xl={2} className={classes.paprcntr} >
          <Paper className={classes.offerpaper}>
            <div className={classes.li}>
              <img
                src={Amazon}
                alt="amazon offer store"
                className={classes.companyimg}
              />
              &emsp;
              <Typography variant="h6" className={classes.cmpnm}>
                Amazon <br />
                <span className={classes.offeravailable}>
                  10 Offers Available
                </span>
              </Typography>
            </div>
          </Paper>
        </Grid>

        <Grid xl={2} className={classes.paprcntr} >
          <Paper className={classes.offerpaper}>
            <div className={classes.li}>
              <img
                src={Amazon}
                alt="amazon offer store"
                className={classes.companyimg}
              />
              &emsp;
              <Typography variant="h6" className={classes.cmpnm}>
                Amazon <br />
                <span className={classes.offeravailable}>
                  10 Offers Available
                </span>
              </Typography>
            </div>
          </Paper>
        </Grid>

        <Grid xl={2} className={classes.paprcntr} >
          <Paper className={classes.offerpaper}>
            <div className={classes.li}>
              <img
                src={Amazon}
                alt="amazon offer store"
                className={classes.companyimg}
              />
              &emsp;
              <Typography variant="h6" className={classes.cmpnm}>
                Amazon <br />
                <span className={classes.offeravailable}>
                  10 Offers Available
                </span>
              </Typography>
            </div>
          </Paper>
        </Grid>

        <Grid xl={2} className={classes.paprcntr} >
          <Paper className={classes.offerpaper}>
            <div className={classes.li}>
              <img
                src={Amazon}
                alt="amazon offer store"
                className={classes.companyimg}
              />
              &emsp;
              <Typography variant="h6" className={classes.cmpnm}>
                Amazon <br />
                <span className={classes.offeravailable}>
                  10 Offers Available
                </span>
              </Typography>
            </div>
          </Paper>
        </Grid>

        <Grid xl={2} className={classes.paprcntr} >
          <Paper className={classes.offerpaper}>
            <div className={classes.li}>
              <img
                src={Amazon}
                alt="amazon offer store"
                className={classes.companyimg}
              />
              &emsp;
              <Typography variant="h6" className={classes.cmpnm}>
                Amazon <br />
                <span className={classes.offeravailable}>
                  10 Offers Available
                </span>
              </Typography>
            </div>
          </Paper>
        </Grid> */}
      </Grid>
    </div>
  );
};
export default AllStores;
