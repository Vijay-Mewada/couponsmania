import React, { useState, useEffect } from "react";
import {
  FormControl,
  Grid,
  Input,
  Select,
  InputLabel,
  FormHelperText,
  TextField,
  TextareaAutosize,
  Button,
} from "@material-ui/core";
import { UploadCouponStyles } from "./UploadCouponStyles";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Logo from "../../images/logo.png";

function UploadCoupon(props) {
  const classes = UploadCouponStyles(props);

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid style={{ display: "flex", margin: "25px" }}>
        <FormControl style={{ margin: "auto" }}>
          <img
            src={Logo}
            alt="logo"
            height="auto "
            width="auto "
            style={{ margin: "auto" }}
          />

          <FormControl style={{marginTop:"25px"}}>
            <TextField
              id="outlined-Discount Title-input"
              label="Company Name"
              type="Discount Title"
              variant="outlined"
            />
            <FormHelperText id="my-helper-text">
              Ex. Flat 50 off & 50% off
            </FormHelperText>
          </FormControl>
          <br />

          <FormControl>
            <TextField
              id="outlined-Discount Title-input"
              label="Discount Title"
              type="Discount Title"
              variant="outlined"
            />
            <FormHelperText id="my-helper-text">
              Ex. Flat 50 off & 50% off
            </FormHelperText>
          </FormControl>
          <br />
          <FormControl variant="outlined">
            <TextareaAutosize
              className={classes.txtarea}
              placeholder="Discription of a offer"
              rowsMin={5}
            />
            <FormHelperText id="my-helper-text">
              Ex. Upto Rs. 50 Amazon Pay Cashback on Payments done via Amazon
              Pay UPI (New User)
            </FormHelperText>
          </FormControl>
          <br />

          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-age-native-simple">
              Offer Type
            </InputLabel>
            <Select
              native
              //   value={state.age}
              //   onChange={handleChange}
              label="offertype"
            >
              <option aria-label="None" value="" />
              <option> For All User</option>
              <option>User Specific</option>
            </Select>
          </FormControl>
          <br/>
          <FormControl variant="outlined">
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Expiry Date of Offer"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            {/* <input accept="image/*" type="file" id="actual-btn" hidden onChange={onChange} />
            <label className={classes.fileuploadbtn} for="actual-btn">
              Choose Company Logo (Image)
            </label>
            <img src={this.state.file[0]} /> */}
          </FormControl>
          <br/>

          <FormControl>
            <Grid container className={classes.uploadform}>
              <Grid
                xs={6}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                style={{ margin: "auto" }}
              >
                <input type="file" onChange={onSelectFile} />
              </Grid>
              <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
                {selectedFile && (
                  <img src={preview} className={classes.uploadimg} />
                )}
              </Grid>
            </Grid>
            <FormHelperText id="my-helper-text">
              Ex. Logo of a Company which provides Coupon
            </FormHelperText>
          </FormControl>
<br/>
          <FormControl>
            <Button variant="outlined" className={classes.submitbtn}>
              Submit
            </Button>
          </FormControl>
        </FormControl>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

export default UploadCoupon;
