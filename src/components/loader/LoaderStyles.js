import { makeStyles } from '@material-ui/core/styles'
import Background from '../../images/logo.gif'

const LoaderStyles =  makeStyles ({
 main:{
     display:'flex',
     height:"100%", 
     margin:"auto",  
     width: "100%", 
     background: "rgba(0, 0, 0, 0.9)",
    top: "0",
    left: "0",
    zIndex: "10000",
    position: "absolute"
 },
 progress:
 {
    margin:"auto", 
    height: "auto",
    width: '140px', 
    margin: 'auto', 
    backgroundImage: `url(${Background})`, 
    backgroundRepeat: "no-repeat", 
    transform: `rotate(${361}deg)`, 
    backgroundPosition: "center" 
 },
});
export { LoaderStyles };