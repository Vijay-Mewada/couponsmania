import { makeStyles } from '@material-ui/styles'

const GetCouponStyles = makeStyles({
    dialog:{
        display:"flex"
      },

      couponcodeimage:{
        margin:"auto",
        width:'150px',
        height:"150px"
      },
      cardpaper:{
        minWidth:"600px"
      },
      companyname1:{
        textAlign:"center",
        margin:"auto",
        fontSize:'1.8rem'
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
})
export {GetCouponStyles}