import { makeStyles } from '@material-ui/core/styles';

const MainStyles = makeStyles ({
    card: {
        margin:'20px',
        maxWidth: 345,
        border:"1px solid rgba(0, 0, 0, 0.1);"
      },
      companylogo: {
        height: "100px",
        width:"100px"
      },
      coupanbtn:{
        backgroundColor:"#635b5b",
        margin:'auto',
        color : "#fff",
        padding:'5px 10px'

      }
        // paper: {
        //     height: 140,
        //     width: 100,
        //   },
      
});
export { MainStyles };