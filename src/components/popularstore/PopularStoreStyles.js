import { makeStyles } from "@material-ui/core";

const PopularStoreStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "35px 25px",
  },
  headingtitle:{
      fontWeight:"600",
      color:"#635b5b"

  },
  paper: {
      margin:"10px",
    display: "flex",
    height: 175,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,

    zIndex:"1000",
    font: "55px Arial",
  display: "flex",
  textAlign: "center",
  color: "white",
  background: "linear-gradient(to left, #fff 50%, rgba(99, 91, 91, 0.9) 50% ) right;",
  backgroundSize: "200%",
  transition: ".5s ease-out",

    '&:hover': {
        backgroundPosition: "left",
    },
  },
  brand: {
    width: "150px",
    margin: "auto",
    zIndex:"100",
  },
 hover:{
    
 },

}));
export { PopularStoreStyles };
