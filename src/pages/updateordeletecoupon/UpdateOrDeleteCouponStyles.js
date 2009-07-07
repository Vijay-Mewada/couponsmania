import { makeStyles } from "@material-ui/core"
import Back from '../../../src/images/back.webp'

const UpdateOrDeleteCouponStyles = makeStyles((theme) =>({

    jumbotron:{
        height:'20rem',
        width:"100%",
         background: `linear-gradient(0deg, rgba(15, 117, 219, 0.7), rgba(52, 177, 235, 0.7)), url(${Back})`,
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
      }
}))
export {UpdateOrDeleteCouponStyles}