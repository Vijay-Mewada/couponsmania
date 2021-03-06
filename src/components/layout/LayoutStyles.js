import { makeStyles, useTheme } from "@material-ui/core";

const drawerWidth = 240;
const smdrawerWidth = 330;
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
    [theme.breakpoints.down('sm')]: {
      width: `calc(100% - ${smdrawerWidth}px)`,
      marginLeft: smdrawerWidth,
    },
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
    overflow:"scroll",

    [theme.breakpoints.down('sm')]: {
      width: smdrawerWidth,
    },
  
    
  },
  drawerPaper: {
    top:"5.6rem",
    width: drawerWidth,
    height:"100vh",
    zIndex:'0',

    [theme.breakpoints.down('sm')]: {
      width: smdrawerWidth,
    },
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
    paddingLeft:"0px",
    paddingRight:"0px",
    paddingBottom:"0px",
    marginTop:"4.09rem",
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    [theme.breakpoints.down('sm')]: {
      marginLeft: -smdrawerWidth,
    },
  },
  contentShift: {
    marginTop:"4.09rem",
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
menu:{
  display:'flex',
  [theme.breakpoints.down('xs')]: {
    display: "none",
  },
},
menubtn:{
  display: "none",
  marginLeft:"auto",
  [theme.breakpoints.down('xs')]: {
    display: "block",
  },
},
openmenubtn:{
  marginLeft:"auto",
  display: "none",

"& $menu": {
  display:"block",
  position:'relative'
},
  
  [theme.breakpoints.down('xs')]: {
    display: "block",
  },

},
link : {
    padding:'5px 10px',
    display:"flex",
    color:'#fff',
    textDecoration:'none',
    cursor:"pointer",
    '&:hover': {
        border:"1px solid white",
        borderRadius:'3px'
    }
},

// dropdownlist:{
//   display:"none",
//   position:"absolute",
//   zIndex:'10',
//   color:'black',
//   boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
//   backgroundColor:"#fff",
//   // padding:"10px",
//   margin:"27px -50px"

// },
// ul:{
//   listStyle:"none",
//   margin:"auto",
//   marginLeft:"-40px",
//   fontSize:"1.3rem",
  
 
// },
// hr:{
//   borderRight:'1px solid black',
//   height:"9.30rem",
//   position:"absolute"

// },
// categoryli:{
//   display:"flex",
//   padding:"10px",
//   width:"17rem",

//       //  extra
//   textAligh:"center",
//   color:"red",
//   margin:'auto 15px ',
//   fontSize:'1.2rem',
//   fontWeight:"600",
//   "&:hover":{
//     // backgroundColor:"black",
//     // color:'white',
//     textDecoration:'underline',
//     "& $subcategory":{
//       display:"inline-block"
//     }
//   }
// },
// leftarrowicon:{
//   margin:'auto 0px auto auto'
// },


// dropdownlink: {
//   padding:'5px 10px',
//     display:"flex",
//     color:'#fff',
//     textDecoration:'none',
//     cursor:"pointer",


// '&:hover': {
    
//   border:"1px solid white",
//   borderRadius:'3px',
//   borderBottom:'1px solid red',

//     "& $dropdownlist": {
//       display:"block"
    
//     },

dropdownlist:{
  display:"none",
  position:"absolute",
  zIndex:'10',
  color:'black',
  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
  backgroundColor:"#fff",
  // padding:"10px",
  margin:"27px -50px"

},
ul:{
  listStyle:"none",
  // margin:"auto",
   marginLeft:"-40px",
  // fontSize:"1.3rem",
  
 
},
hr:{
  borderRight:'1px solid black',
  height:"9.30rem",
  position:"absolute"

},
categoryli:{
  display:"flex",
  padding:"10px",
  width:"17rem",

      //  extra
  textAligh:"center",
  color:"red",
  margin:'auto 15px ',
  fontSize:'1rem',
  fontWeight:"600",
  "&:hover":{
    // backgroundColor:"black",
    // color:'white',
    textDecoration:'underline',
    "& $subcategory":{
      display:"inline-block"
    }
  }
},
subcategoryli:{
  textAligh:"center",
  margin:'auto 21px',
  padding:"2px",
  fontSize:'1rem',
  "&:hover":{
    color:'red',
  }
},
leftarrowicon:{
  margin:'auto 0px auto auto'
},


dropdownlink: {
  padding:'5px 10px',
    display:"flex",
    color:'#fff',
    textDecoration:'none',
    cursor:"pointer",


'&:hover': {
    
  border:"1px solid white",
  borderRadius:'3px',
  borderBottom:'1px solid red',

    "& $dropdownlist": {
      display:"block"
    
    },


    // "& $couponavailable": {
    //   position:"absolute",
    //   fontSize:"20px",
    //   color:"white",
    //   textAlign:"center",
    //   display:'flex',
    //   margin:"auto"
      
    
    // }
},



},
category:{
  "&:hover":{
    backgroundColor:"black",
    color:'white',
    "& $subcategory":{
      display:"inline-block"
    }
  }
},
subcategory:{
 position:"absolute",
 margin:"0px 10px",
 top:"0",
  // marginLeft:"15.7rem",
 display:"none",
 color:"black"
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
offerpaper:{
  margin:"10px",
  "&:hover":{
    transform: "scale(1.1)",
 
  }
},
offerpaper1:{
  color:'red',
  marginTop:'auto',
  marginLeft:"auto",
  marginRight:'auto',
  "&:hover":{
    transform: "scale(1.1)",
 
  }
},
cmpnm:{
  overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    textAlign:"center"
},
viewmore:{
  display:'flex',
  textDecoration:'none',
  color:"black",
  "&:hover":{
    color:'red',
    transform: "scale(1.1)",
  }
},
viewmoreicon:{
  margin:'auto'
}

}));
export { LayoutStyles }