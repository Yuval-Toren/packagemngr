import React from 'react';
//import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
//import Orders from "./Orders";
//import Electricity from "./Electricity";
import Attendance from "./Attendance";

function Container() {
    return (
      <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Attendance" component={Attendance} />
            {/*<Route exact path="/Orders" component={Orders} />*/}
            {/*<Route path="/Electricity" component={Electricity}/>*/}
          </Switch>
      </div>
    );
  }

  export default Container;