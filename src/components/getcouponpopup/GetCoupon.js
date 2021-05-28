import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GetCouponStyles } from './GetCouponStyles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { CancelScheduleSendOutlined } from "@material-ui/icons";
import CloseIcon from '@material-ui/icons/Close';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import { Grid } from '@material-ui/core';
import img from '../../images/amazonlogo.jpg'

function GetCoupon(props) {
  const classes = GetCouponStyles(props);
  const { handleClose, isCouponsPopupOpen, selectedCoupon } = props;


  return (
    <div>
      {/* {
              //  render popup in case it is open
              selectedCoupon && selectedCoupon.id ? */}
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={isCouponsPopupOpen} fullWidth={true} >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} >
          <div className={classes.dialog}>
            <img src={img} alt='Coupon Code' className={classes.couponcodeimage} /><br />
            <CloseIcon className={classes.closeicon} onClick={handleClose} />
          </div>
          <div className={classes.dialog}>

            <Typography variant='title' className={classes.companyname1}>{selectedCoupon.title}</Typography><br />
          </div>
          {/* <div className={classes.dialog}>
         <Typography variant='title' className={classes.companyname1}>{selectedCoupon.title}</Typography><br/>
         </div> */}


        </DialogTitle>
        <DialogContent dividers>
          <Typography variant='h4' className={classes.companyname1}>et Google help apps determine location. This means sending anonymouet Google help apps determine location. This means sending anonymoue 350</Typography><br />
          <div className={classes.dialog}>
            <div className={classes.codebordr}>
              <Grid xs={6} style={{ display: 'flex' }}>
                <Typography variant='tile' className={classes.couponcode}>flat</Typography>
              </Grid>
              <Grid xs={6} className={classes.dialog}>
                <Button variant='primary' className={classes.codebtn}>Copy Code</Button>

              </Grid>

            </div>&emsp;&emsp;
              <Button className={classes.redirectbtn}>GO</Button>
          </div>
          {/* </div>
          <div className={classes.codebordr}><Typography title='copy code' className={classes.couponcode}>{itm.code}&emsp;&nbsp;
            <Button variant='primary' className={classes.codebtn}>Copy</Button>
          </Typography></div> */}
          {/* <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </Typography> */}
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions> */}
      </Dialog>

      {/* :
                null
            } */}
    </div>
  );
}
export default GetCoupon

// SimpleDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selectedValue: PropTypes.string.isRequired,
// };

// export default function SimpleDialogDemo() {
//   const [open, setOpen] = React.useState(false);
//   const [selectedValue, setSelectedValue] = React.useState(emails[1]);

// //   const handleClickOpen = () => {
// //     setOpen(true);
// //   };

//   const handleClose = (value) => {
//     setOpen(false);
//     setSelectedValue(value);
//   };

//   return (
//     <div>
//       <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
//       <br />

//       <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
//     </div>
//   );
// }