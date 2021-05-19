import { makeStyles, useTheme } from "@material-ui/core";

const drawerWidth = 240;
const LayoutStyles = makeStyles((theme) =>({
layout:{
    height:"100vh",
    width:250,
    marginTop:"0px",
    background:"white",
    boxShadow:"2px 2px 3px gray"
},
sidebarclose :{
    // display:'none'
    marginLeft:'-190px'
},
// nav:{
//     width:'85%'
// },

root: {
    display: 'flex',
  },
  appBar: {
    top:"5.6rem",
    backgroundColor:"#454545", 
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    
    }),
  },
  menuButton: {
    margin:"auto 5px",
    borderRadius:'0px',
    padding:'5px',
    marginRight: theme.spacing(2),
    "&:hover":{
      border:"1px solid white"
  }
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    top:"5.6rem",
    width: drawerWidth,
  },
  drawerHeader: {
    
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    marginTop:"4.8rem",
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    marginTop:"4.8rem",
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

  // navigation

  
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
    padding:'5px 10px',
    display:"flex",
    color:'#fff',
    textDecoration:'none',
    "&:hover":{
        border:"1px solid white"
    }
}


}));
export { LayoutStyles }