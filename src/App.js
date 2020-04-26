import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Formuserdetail from "./Component/Formuserdetail";
import Header from "./Header";
import Validation from "./Component/Validation";
import Dashboard from "./Component/Dashboard";
import Mainpage from "./Component/Mainpage";
import Userform from "./Component/Userform";
import { Detailprovider } from "./Component/Logincontext";
import Login from "./Component/Login";

function App() {
  return (
    <div className="container-fluid">
      <Detailprovider>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Mainpage} />
            <Route path="/Signup" exact component={Userform} />
            <Route path="/Login" exact component={Login} />
            <Route path="/dashboard" exact component={Validation} />
          </Switch>
        </Router>
      </Detailprovider>
    </div>
  );
}

export default App;
