import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import MasterLayout from "./hoc/MasterLayout";

ReactDOM.render(
  <BrowserRouter>
    <MasterLayout>
      <App />
    </MasterLayout>
  </BrowserRouter>,
  document.getElementById("root")
);
