import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Main from "./components/main/Main";
import { Grid } from "@material-ui/core";
import UploadCoupon from "./pages/uploadcoupon/UploadCoupon";
import GlobalStateProvider from "./store/GlobalStateProvider";
import AllStores from "./pages/allstores/AllStores"
import AllCategories from './pages/allcategories/AllCategories'
import UpdateOrDeleteCoupon from './pages/updateordeletecoupon/UpdateOrDeleteCoupon'
import ContactUs from './pages/contactus/ContactUs'

function App(props) {
  return (
    <GlobalStateProvider>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/couponsmania" component={Main} />
            <Route exact path="/couponsmania/UploadCoupon" component={UploadCoupon} />
            <Route exact path="/couponsmania/AllStores" component={AllStores} />
            <Route exact path="/couponsmania/AllCategories" component={AllCategories} />
            <Route exact path="/couponsmania/UpdateOrDeleteCoupon" component={UpdateOrDeleteCoupon} />
            <Route exact path="/couponsmania/ContactUs" component={ContactUs} />
          </Switch>
        </Layout>
      </Router> 
    </GlobalStateProvider>
  );
}

export default App;
