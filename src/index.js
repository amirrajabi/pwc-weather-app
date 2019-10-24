import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline, Container } from "@material-ui/core";

import App from "./pages/App";

const rootNode = document.getElementById("root");

ReactDOM.render(
  <>
    <CssBaseline />
    <Container maxWidth="lg">
      <App />
    </Container>
  </>,
  rootNode
);
