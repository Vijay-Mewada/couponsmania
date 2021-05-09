import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Main from "./components/main/Main";
import { Grid } from "@material-ui/core";
import UploadCoupon from "./pages/uploadcoupon/UploadCoupon";

function App(props) {
  return (
    <Router>
        <Layout>
        
        
      <Switch>
        <Route exact path="/couponsmania" component={Main} />
        <Route exact path="/UploadCoupon" component={UploadCoupon} />
      </Switch>
      </Layout>
    </Router>
  );
}

export default App;
