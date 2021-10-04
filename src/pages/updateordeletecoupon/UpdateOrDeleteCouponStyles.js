import { makeStyles } from "@material-ui/core"
import Back from '../../../src/images/back.webp'

const UpdateOrDeleteCouponStyles = makeStyles((theme) =>({

    jumbotron:{
        height:'20rem',
        width:"100%",
         background: `linear-gradient(0deg, rgba(255, 0, 0, 0.7), rgba(255, 0, 235, 0.7)), url(${Back})`,
        // backgroundSize:'cover',
        // backgroundRepeat:'no-repeat',
        
    },
    text:{
        margin:'auto',
        color:'#fff',
        textTransform:'uppercase',
        fontSize:"3rem",
        [theme.breakpoints.down('sm')]: {
            display: "none",
          },
    },
    merchants:{
        height: "250px", 
        margin: "auto",
        [theme.breakpoints.down('sm')]: {
          height: "98px",
        }, 
      },
      // table:{
      
      // },
      paprcntr:{
        [theme.breakpoints.down('sm')]: {
          margin: "auto",
        },
      },
      offerpaper:{
        margin:"10px 25px",
        padding:'5px',
        overflow:'scroll',
        // "&:hover":{
        //   transform: "scale(1.1)",
        //   cursor:'pointer'
       
        // },
        // [theme.breakpoints.down('lg')]: {
        //     margin:"10px ",
        //     width:'250px',
        //     maxWidth: '250px'
        //   },
          // [theme.breakpoints.down('sm')]: {
          //   margin:"auto ",
          // },
      },
      li:{
        display:"flex",
      
      },
      companyimg:{
        height:"2.5rem",
        width:"2.5rem",
        margin:"auto 0px auto 10px"
      },
      offeravailable:{
        fontSize:'0.8rem'
      },
      cmpnm:{
        overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          textAlign:"center",
        
      },
      theading:{
        fontWeight:"900",
        textTransform:"uppercase"
      }
}))
export {UpdateOrDeleteCouponStyles}