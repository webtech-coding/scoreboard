import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/home";
import Player from "./components/player";

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/add_player' exact component={Player}></Route>
      <Route path='/player/edit/:id' exact component={Player}></Route>
    </Switch>
  );
}

export default App;
