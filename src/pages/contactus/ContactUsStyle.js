import {makeStyles} from '@material-ui/core'
import Background from '../../images/contactback.jpg'

const ContactUsStyle = makeStyles ((theme) =>({
    jumbotron:{
        height:'14rem',
        width:"100%",
        //  background: `linear-gradient(0deg, rgba(255, 0, 0, 0.7), rgba(255, 0, 235, 0.7)), url(${Back})`,
        // backgroundSize:'cover',
        // backgroundRepeat:'no-repeat',
        
    },
    upperimg:{
        width:"100%",
        height:"14rem"
    },
    contactback : {
        background: `linear-gradient(0deg, rgba(255, 0, 0, 0.7), rgba(255, 0, 235, 0.7)), url(${Background})`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
    },
    offerpaper:{
       
        padding:'5px',
        height:"250px",
        width:"250px",
        margin:'10px auto',
        // overflow:'scroll',
        "&:hover":{
            // background: `linear-gradient(0deg, rgba(255, 0, 0, 0.7), rgba(255, 0, 235, 0.7))`,
            background: `linear-gradient(
                45deg
                , rgba(38, 255, 230) 15%, rgba(0, 117, 242) 65%)`,
            color:'#fff',
            transform: `translateY(-7.5px)`,
            // transitionDuration: '0.4s',
            transition: 'transform 0.4s',
            // transition: 'color 1s ease-out, background-color 1s ease-out'
        },
        icons:{
            margin:'auto',
            display:'flex'
        }
    }
}))
export {ContactUsStyle}