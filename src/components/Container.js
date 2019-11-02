import React from 'react';
//import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Orders from "./Orders";
import Electricity from "./Electricity";

function Container() {
    return (
      <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Orders" component={Orders} />
            <Route path="/Stock" component={() => <div>Stock</div>} />
            <Route path="/Electricity" component={Electricity}/>
          </Switch>
      </div>
    );
  }

  export default Container;