import React from 'react'
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { MainStyles } from "./MainStyles";
import Amazon from "../../images/amazonlogo.jpg";
import Flipkart from "../../images/flipartlogo.png";
import Freecharge from "../../images/freechargelogo.png";
import Jio from "../../images/jiologo.png";
import PopularStore from "../popularstore/PopularStore";
function Main(props) {
    const classes = MainStyles(props);
    return (
        <Grid container spacing={2}>
        <Grid xs={12} sm={6} md={6} lg={4} xl={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <img
                className={classes.companylogo}
                src={Amazon}
                alt="company logo"
              />
              <hr style={{ color: "rgba(0, 0, 0, 0.1)" }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Amazon
                </Typography>
                <Typography gutterBottom variant="h6" component="h2">
                  flat 50 off
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Upto Rs. 50 Amazon Pay Cashback on Payments done via Amazon
                  Pay UPI (New User)
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" className={classes.coupanbtn}>
                Get Coupon
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid xs={12} sm={6} md={6} lg={4} xl={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <img
                className={classes.companylogo}
                src={Flipkart}
                alt="company logo"
              />
              <hr style={{ color: "rgba(0, 0, 0, 0.1)" }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Flipkart
                </Typography>
                <Typography gutterBottom variant="h6" component="h2">
                  flat 50 off
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Lizards are a widespread group of squamate reptiles, with
                  over 6,000 species, ranging across all continents except
                  Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" className={classes.coupanbtn}>
                Get Coupon
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid xs={12} sm={6} md={6} lg={4} xl={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <img
                className={classes.companylogo}
                src={Freecharge}
                alt="company logo"
              />
              <hr style={{ color: "rgba(0, 0, 0, 0.1)" }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Freecharge
                </Typography>
                <Typography gutterBottom variant="h6" component="h2">
                  flat 50 off
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Lizards are a widespread group of squamate reptiles, with
                  over 6,000 species, ranging across all continents except
                  Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" className={classes.coupanbtn}>
                Get Coupon
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid xs={12} sm={6} md={6} lg={4} xl={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <img
                className={classes.companylogo}
                src={Jio}
                alt="company logo"
              />
              <hr style={{ color: "rgba(0, 0, 0, 0.1)" }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Jio
                </Typography>
                <Typography gutterBottom variant="h6" component="h2">
                  flat 50 off
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Lizards are a widespread group of squamate reptiles, with
                  over 6,000 species, ranging across all continents except
                  Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" className={classes.coupanbtn}>
                Get Coupon
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid xs={12} sm={6} md={6} lg={4} xl={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <img
                className={classes.companylogo}
                src={Jio}
                alt="company logo"
              />
              <hr style={{ color: "rgba(0, 0, 0, 0.1)" }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Jio
                </Typography>
                <Typography gutterBottom variant="h6" component="h2">
                  flat 50 off
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Lizards are a widespread group of squamate reptiles, with
                  over 6,000 species, ranging across all continents except
                  Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" className={classes.coupanbtn}>
                Get Coupon
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
          <PopularStore />
        </Grid>
      </Grid>
    )
}

export default Main
