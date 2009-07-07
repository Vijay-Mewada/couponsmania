import { makeStyles } from '@material-ui/core'
import Back from '../../../src/images/back.webp'

const AllStoresStyles = makeStyles ((theme)=>({
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
    offerpaper:{
        margin:"10px 25px",
        padding:'5px',
        "&:hover":{
          transform: "scale(1.1)",
          cursor:'pointer'
       
        },
        [theme.breakpoints.down('lg')]: {
            margin:"10px ",
            width:'250px',
            maxWidth: '250px'
          },
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
      alphabet:{
        fontWeight:'900',
        color:'black',
        "&:hover":{
          color:'red',
        }
      },
      paprcntr:{
        [theme.breakpoints.down('sm')]: {
          margin: "auto",
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
export {AllStoresStyles};