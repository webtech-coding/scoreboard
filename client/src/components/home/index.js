import React, { Component, Fragment } from "react";

import Scoreboard from "./scoreboard";
import Sort from "./sort";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Sort />
        <Scoreboard />
      </Fragment>
    );
  }
}

export default Home;
