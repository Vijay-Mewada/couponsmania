import { makeStyles } from "@material-ui/core/styles";

const UploadCouponStyles = makeStyles({
  txtarea: {
    resize: "none",
    height: "150px",
  },
  fileuploadbtn:{
    position:"absolute",
    backgroundColor: "#635b5b",
    color: "white",
    padding: "0.5rem",
    borderRadius: "0.3rem",
    cursor: "pointer",
    marginTop: "10px",
    textAlign:"center"
  },
  uploadform:{
    border:"1px solid lightgray",
     borderRadius: "5px",
     padding:'15px 20px'
  },
  uploadimg:{
    height:"100px",
    width:'100px'
  },
  submitbtn:{
    color:"#635b5b"
  }
});
export { UploadCouponStyles };
