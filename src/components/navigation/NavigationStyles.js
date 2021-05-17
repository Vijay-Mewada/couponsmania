import { makeStyles } from '@material-ui/core/styles'

 const NavigationStyles = makeStyles({
    main:{
        backgroundColor:"#454545", 
        padding:'15px',
        display:'flex'
    },
    sidetoggle:{
        color:'#fff',
        margin:'auto 0px',
        padding : '0px'
    },
    link : {
        padding:'1px 10px',
        display:"flex",
        color:'#fff',
        textDecoration:'none',
        "&:hover":{
            border:"1px solid white"
        }
    }
 })
 export { NavigationStyles };