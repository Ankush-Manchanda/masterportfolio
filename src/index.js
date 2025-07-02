import React from "react";
import ReactDOM from "react-dom";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import "./index.css";
import "./assets/font-awesome/css/all.css";
// import "bootstrap/dist/css/bootstrap.min.css"; // optional, not used currently

import App from "./App";
import * as serviceWorker from "./serviceWorker";

const engine = new Styletron();

ReactDOM.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <App />
    </BaseProvider>
  </StyletronProvider>,
  document.getElementById("root")
);

// ❗ By default, service worker is disabled
// If you want offline support (PWA), change to: serviceWorker.register();
serviceWorker.unregister();
