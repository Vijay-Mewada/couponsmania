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
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography
} from "@material-ui/core";
import Moment from "moment";
import { UploadCouponStyles } from "./UploadCouponStyles";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Logo from "../../images/logo.png";
import { post, get } from "../../api/serverRequest";

function UploadCoupon(props) {
  const classes = UploadCouponStyles(props);
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedFile, setSelectedFile] = useState('');
  const [categoryList, setCategoryList] = useState([]);
  const [companyList, setCompanyList] = useState([]);
  const [preview, setPreview] = useState();
  const [title, setTitle] = useState('');
  const [companyId, setCompanyId] = useState('');
  const [description, setDescription] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [code, setCode] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  //  component didmount to get all category and companylist
  useEffect(async () => {
    //  set Category list to state
    let categoryListResponse = await get("/coupon/getAllCategory");
    if (categoryListResponse && categoryListResponse.data && categoryListResponse.data.content) {
      setCategoryList(categoryListResponse.data.content)
    }
    //  set company list to state
    getAllCompanyList()
  }, [])

  const getAllCompanyList = async()=>{
    let companyListResponse = await get("/coupon/getAllCompany");
    if (companyListResponse && companyListResponse.data && companyListResponse.data.content) {
      setCompanyList(companyListResponse.data.content)
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleDateChange = (date) => {
    console.log(date);
    if (date >= new Date()) {
      setSelectedDate(date);
    } else {
      alert("Date should not be less than today's date")
      setErrorMessage("Date should not be less than today's date")
    }
  };

  // handle company form submit 
  const handleCompanyDataSubmit = async() => {

    var form_data = new FormData();
    form_data.append('company', companyName)
    form_data.append('image', selectedFile)
    let response = await post("/coupon/addCompany", form_data);
    console.log( response.data)
    if(response && response.data && response.data.content && response.data.content[0] && response.data.content[0].insertId){
      setCompanyId(response.data.content[0].insertId)
      getAllCompanyList()
      handleClose()
    }
    
  }

  const handleFormSubmit = async () => {
    var validityDate = Moment(selectedDate).format("YYYY-MM-DD")
    if (selectedDate && categoryId && companyId) {
      var data = {
        title: title,
        code,
        description,
        companyId: companyId,
        categoryId: categoryId,
        validity: validityDate

      }
      let response = await post("/coupon/addCoupon", data);
      if (response && response.data && response.data.is_success) {
        setSelectedDate(new Date())
        setSelectedFile('')
        setPreview()
        setTitle('')
        setCompanyId('')
        setDescription('')
        setCategoryId('')
        setCode('')
        setErrorMessage('')
        setCompanyName('')
      }
    }
  }


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
      <Grid className={classes.main}>
        <Paper className={classes.paper}>
          <FormControl style={{ margin: "auto" }}>
            <img
              src={Logo}
              alt="logo"
              height="auto "
              width="auto "
              style={{ margin: "25px auto" }}
            />

            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                Company Name
            </InputLabel>
              <Select
                native
                value={companyId}
                onChange={(e) => setCompanyId(e.target.value)}
                label="companyName"
              >
                <option aria-label="None" value="" />
                {companyList && companyList.map((item, ind) => {
                  return <option id={ind} value={item.id}> {item.name}</option>
                })}
                {/* <option> For All User</option>
              <option>User Specific</option> */}
              </Select>
            </FormControl>
            <br />
            <FormControl >
              <TextField
                id="outlined-Discount Title-input"
                label="Coupon Code"
                type="coupon code"
                variant="outlined"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <FormHelperText id="my-helper-text">
                Ex. code50, off786, usb_90...
            </FormHelperText>
            </FormControl>
            <br />

            <FormControl>
              <TextField
                id="outlined-Discount Title-input"
                label="Discount Title"
                type="Discount Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                label="offertype"
              >
                <option aria-label="None" value="" />
                {categoryList && categoryList.map((item, ind) => {
                  return <option id={ind} value={item.id}> {item.name}</option>
                })}
                {/* <option> For All User</option>
              <option>User Specific</option> */}
              </Select>
            </FormControl>
            <br />
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
            <br />

            {/* <FormControl>
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
          </FormControl> */}
            {/* <br /> */}
            <FormControl>
              <Button variant="outlined" className={classes.submitbtn} onClick={() => handleFormSubmit()}>
                Submit
            </Button>
            </FormControl><br />
            <FormControl>
              <Typography variant='title' style={{ textAlign: 'center' }}>
                Company not found ? &nbsp;
              <Button color='primary' variant='outlined' onClick={handleClickOpen}>Add</Button>
              </Typography>


              <Dialog

                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title" className={classes.dialogbox}>{"Add Company Details."}</DialogTitle>
                <DialogContent>

                  <FormControl style={{ width: "100%", marginBottom: "10px" }}>
                    <TextField
                      id="outlined-Discount Title-input"
                      label="Company Name"
                      type="Company Name"
                      variant="outlined"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}

                    />
                    <FormHelperText id="my-helper-text">
                      Ex. Amazon, Flipkart, Freecharge...
            </FormHelperText>
                  </FormControl><br />


                  <FormControl style={{ width: "100%" }}>
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


                </DialogContent>
                <DialogActions>
                  <Button onClick={()=>handleCompanyDataSubmit()} color="primary">
                    Submit
          </Button>
                  <Button onClick={handleClose} color="primary" autoFocus>
                    Cancel
          </Button>
                </DialogActions>
              </Dialog>

            </FormControl>


          </FormControl>
        </Paper>
      </Grid>

    </MuiPickersUtilsProvider>
  );
}

export default UploadCoupon;
