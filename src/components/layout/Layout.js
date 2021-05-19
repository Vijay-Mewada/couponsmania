import { Grid } from "@material-ui/core";
import React, { useState, useContext } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navigation from "../navigation/Navigation";
import Sidebar from "../sidebar/Sidebar";
import { LayoutStyles } from './LayoutStyles'
import Context from "../../store/context";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuOpenSharpIcon from '@material-ui/icons/MenuOpenSharp';
import { Link } from "react-router-dom";

const drawerWidth = 240;
function Layout(props) {
  const classes = LayoutStyles(props);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openSidebar, setOpenSidebar] = useState(true);
  const { globalState, globalDispatch } = useContext(Context)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Grid>
      <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
        <Header />
        
      </Grid>

      <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            

            <MenuOpenSharpIcon style={{fontSize:'1.5rem'}} />
            <Typography variant='h6'>Filter</Typography>
          </IconButton>
          {/* <Link className={classes.link} onClick={() => handleSidebarStatus()}><MenuOpenSharpIcon className={classes.sidetoggle} />&nbsp;Filter</Link> */}
            <Link className={classes.link} to='/couponsmania'>Home</Link>
            <Link className={classes.link} to='/'>Categories</Link>
            <Link className={classes.link} to='/'>Top Store</Link>
            <Link className={classes.link} to='/'>Best offer</Link>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
        <Typography variant='h6'>Filter</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <MenuOpenSharpIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />

        
        <Sidebar />
        {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <main >{props.children}</main>
      </main>
    </div>



    
    
          
         
         
          
          {/* <Navigation style={{backgroundColor: "#cafaf8"}} /> */}
        
          
         
         
         
        
     

    
      
     

      <Footer />
    </Grid>
  );
}

export default Layout;
