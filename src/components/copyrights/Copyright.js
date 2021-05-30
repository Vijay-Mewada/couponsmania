import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const CopyrightStyle = makeStyles({
    copyrightstxt:{
        textAlign:"center",
        color:'#fff',
        padding:"10px"
    }
})
function Copyright(props) {
    const  classes = CopyrightStyle(props)
    return (
        <div>
             <Grid lg={12} xl={12} sm={12} md={12} style={{background:'#454545'}}>
            {/* <hr/> */}
              <Typography variant='subtitle2' className={classes.copyrightstxt} >All rights reserved. &copy; Couponsmania.in</Typography>

            </Grid>
        </div>
    )
}

export default Copyright
