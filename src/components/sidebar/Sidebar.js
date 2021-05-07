import { Card, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { SidebarStyles } from "./Sidebarstyles";
import Checkbox from "@material-ui/core/Checkbox";

function Sidebar(props) {
  const classes = SidebarStyles(props);
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Grid>
      <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
        <Card className={classes.card}>
        <Typography variant="h6">Categories</Typography>

<Grid className={classes.rechargectgry}>
<Typography variant="title" >
  <Checkbox
    
    color="default"
    inputProps={{ "aria-label": "checkbox with default color" }}
  />  Mobile Recharge
</Typography>
</Grid>
<Grid className={classes.rechargectgry}>
<Typography variant="title" >
  <Checkbox
    
    color="default"
    inputProps={{ "aria-label": "checkbox with default color" }}
  />  DTH Recharge
</Typography>
</Grid>

<Grid className={classes.rechargectgry}>
<Typography variant="title" >
  <Checkbox
    
    color="default"
    inputProps={{ "aria-label": "checkbox with default color" }}
  />  Bill Payment
</Typography>
        </Grid>
        </Card>



      </Grid>
    </Grid>
  );
}

export default Sidebar;
