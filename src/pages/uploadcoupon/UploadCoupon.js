import {
  FormControl,
  Grid,
  Input,
  Select,
  InputLabel,
  FormHelperText,
  TextField,
  TextareaAutosize,
} from "@material-ui/core";
import { UploadCouponStyles } from "./UploadCouponStyles";
import React from "react";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';

function UploadCoupon(props) {
  const classes = UploadCouponStyles(props);

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  
  return (
    <Grid style={{display:'flex', margin:'25px'}}>
      <FormControl style={{margin:"auto"}}>
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
        <br/>
        <FormControl variant="outlined">
        <TextareaAutosize
          className={classes.txtarea}
          placeholder="Discription of a offer"
          rowsMin={5}
        />
        <FormHelperText id="my-helper-text">
          Ex. Upto Rs. 50 Amazon Pay Cashback on Payments done via Amazon Pay
          UPI (New User)
        </FormHelperText>
        </FormControl>
        <br/>

        <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-age-native-simple">Offer Type</InputLabel>
        <Select
          native
        //   value={state.age}
        //   onChange={handleChange}
          label="offertype"
        >
          <option aria-label="None" value="" />
          <option > For All User</option>
          <option >User Specific</option>
        </Select>
        </FormControl>

        <FormControl variant="outlined">
        <MuiPickersUtilsProvider>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
        </FormControl>


      </FormControl>
    </Grid>
  );
}

export default UploadCoupon;
