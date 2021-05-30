import { fade, makeStyles } from '@material-ui/core/styles';


const FooterStyles = makeStyles((theme) => ({ 
  root:{
    background:"#635b5b",
    padding:"25px",
    position:'relative',
  },
  title: {
    display: 'none',
    margin: '-84px 0px 0px 90px',
    color:"white",
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  title1:{
    display: 'none',
    margin: "3px auto auto 95px",
  color: "#ff9c00",
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
},
footlink:{
  color:"#fff",
  textDecoration:"none",
  fontSize:"1rem",
  fontWeight:'600',
  
},
}));
export { FooterStyles };