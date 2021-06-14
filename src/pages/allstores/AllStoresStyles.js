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
        [theme.breakpoints.down('sm')]: {
            display: "none",
          },
    }
}))
export {AllStoresStyles};