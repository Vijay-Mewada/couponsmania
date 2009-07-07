import { makeStyles, useTheme } from '@material-ui/core'
import Back from '../../../src/images/back.webp'

const AllCategoriesStyles = makeStyles((theme) => ({
 heading:{
    textTransform:"uppercase",
    textAlign:"center"
    
 },
 ul:{
    listStyle:"none",
    // margin:"auto",
    //  marginLeft:"-40px",
    // fontSize:"1.3rem",
    
   
  },
 categoryli:{
    display:"flex",
    padding:"10px",
    width:"17rem",
  
        //  extra
    textAligh:"center",
    color:"red",
    margin:'auto 15px ',
    fontSize:'1.25rem',
    fontWeight:"600",
    "&:hover":{
        textDecoration:'underline',
        cursor:'pointer'
      }
 },
 subcategoryli:{
    textAligh:"center",
    margin:'auto 21px',
    padding:"2px",
    fontSize:'1.1rem',
    "&:hover":{
      color:'red',
      cursor:'pointer',
      fontWeight:'700'
    }
  },
  jumbotron:{
    height:'20rem',
    width:"100%",
     background: `linear-gradient(0deg, rgba(255, 0, 0, 0.7), rgba(255, 10, 235, 0.7)), url(${Back})`,
    //  backgroundSize:'contain',
    //  backgroundRepeat:'no-repeat',
     
    
},
text:{
    margin:'auto',
    color:'#fff',
    textTransform:'uppercase',
    fontSize:"2rem",
    [theme.breakpoints.down('sm')]: {
        display: "none",
      },
      [theme.breakpoints.up('xl')]: {
        fontSize:"3rem",
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
export {AllCategoriesStyles};