import React, { Fragment } from "react";

import Navigation from "./../components/navigations";
import Header from "./../components/header";

const MasterLayout = props => {
  return (
    <Fragment>
      <Navigation />

      <main>
        <Header />
        {props.children}
      </main>
    </Fragment>
  );
};

export default MasterLayout;
