import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import HomeComponent from "./components/HomeComponent";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
import DashboardComponent from "./components/DashboardComponent";
import AboutUsComponent from "./components/AboutUsComponent";
import ContactUsComponent from "./components/ContactUsComponent";
import TCComponent from "./components/TCComponent";
import AddStoreComponent from "./components/AddStoreComponent";
import ViewStoreComponent from "./components/ViewStoreComponent";
import SearchStoreComponent from "./components/SearchStoreComponent";
import ListStoreComponent from "./components/ListStoreComponent";
import FbDashboardComponent from "./components/FbDashboardComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent></HeaderComponent>

        <Switch>
          <Route path="/" exact component={HomeComponent} />
          <Route path="/users" component={HomeComponent} />
          <Route path="/register" component={RegisterComponent} />
          <Route path="/login" component={LoginComponent} />
          <Route path="/dash" component={DashboardComponent} />
          <Route path="/contactus" component={ContactUsComponent} />
          <Route path="/aboutus" component={AboutUsComponent} />
          <Route path="/tnc" component={TCComponent} />
          <Route path="/addStore/:storeid" component={AddStoreComponent} />
          <Route path="/search" component={SearchStoreComponent} />
          <Route
            path="/search-store/:searchKeyword"
            component={SearchStoreComponent}
          />
          <Route path="/view-store/:storeid" component={ViewStoreComponent} />
          <Route path="/list-stores" component={ListStoreComponent} />
          <Route path="/fbdash" component={FbDashboardComponent} />
        </Switch>

        <FooterComponent></FooterComponent>
      </Router>
    </div>
  );
}
export default App;
