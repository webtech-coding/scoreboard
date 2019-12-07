import React, { Component, Fragment } from "react";

import Scoreboard from "./scoreboard";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Scoreboard />
      </Fragment>
    );
  }
}

export default Home;
