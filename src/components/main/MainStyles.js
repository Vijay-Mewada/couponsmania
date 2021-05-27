import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';



  const MainStyles = makeStyles ({
    card: {
        margin:'20px',
        maxWidth: 345,
       
        border:"1px solid rgba(0, 0, 0, 0.1);",
        '&:hover' :{
          "& $description": {
            whiteSpace: "normal",
          },
          "& $companyname": {
            whiteSpace: "normal",
        }
      }
      },
      companylogo: {
        height: "100px",
        width:"100px",
        margin:"auto"
      },
      companyname:{
        overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    textAlign:"center"
    // '&:hover': {
    //   whiteSpace: "normal",
    // }
      },
      description:{
        overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    // '&:hover': {
    //   whiteSpace: "normal",
    // }
      },
      coupanbtn:{
        // backgroundColor:"#635b5b",
        margin:'auto',
        color : "#fff",
        fontWeight:"600",
        padding:'5px 10px',
        border:"1px dotted red",
        minWidth:"10rem",
        background:"#635b5b",
        "&:hover":{
          background:"#635b5b",
          "& $corner":{
            height:"30px",
            width:"30px"
          },
         
            "& $description": {
              whiteSpace: "normal",
            },
            "& $companyname": {
              whiteSpace: "normal",
         
        }
        }

      },
      spinloader : {
        animationName: "spinning",
        animationDuration: "3s",
        animationIterationCount: "infinite",
        /* linear | ease | ease-in | ease-out | ease-in-out */
        animationTimingFunction: "linear",
      },
      corner:{
      
        width: "18px",
        height: "18px",
        background: "linear-gradient(to left bottom, #d6dadc 48%, #454545 50%)",
        left: "auto",
        right: "0",
        top: '0',
        borderTopRightRadius: "3px",
        borderBottomLeftRadius: "3px",
        transform: "none",
        overflow: "hidden",
        position: "absolute",
        zIndex: "9",
        transition: "all .3s ease-out",
        '&:hover' :{
          "& $description": {
            whiteSpace: "normal",
          },
          "& $companyname": {
            whiteSpace: "normal",
        }
      }
      },
      dialog:{
        display:"flex"
      },

      couponcodeimage:{
        margin:"auto",
        width:'150px',
        height:"150px"
      },
      companyname1:{
        textAlign:"center",
        margin:"auto",
      },
      codebordr:{
        display:'flex',
        border:"1px solid lightgray",
        width:'17rem',
        margin:'20px auto',
        borderRadius:'5px',
      },
      couponcode:{
        margin:"auto",
        fontWeight:'600',
        padding:'0px 0px 0px 20px',
      },
      codebtn:{
        marginLeft:'auto',
        background:'red',
        padding:'12px 15px',
        color: "#fff",
      },
        // paper: {
        //     height: 140,
        //     width: 100,
        //   },
      redirectbtn:{
        position:'absolute',
        right:"5.8rem",
        display:'flex',
        marginTop:"1.2rem",
        borderRadius:"9999px",
        height:"50px",
        background:"green",
        color:"#fff",
        fontWeight:'600'
      },
      closeicon:{
        "&:hover":{
          color:'red',
          cursor:"pointer",
          background:"lightgray"
        }
      }

});
export { MainStyles };