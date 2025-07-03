import React from "react";
import "./App.css";
import Main from "./containers/Main";
import Splash from "./pages/splash/Splash";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <Router>
          <Switch>
            {/* Splash screen (landing page) */}
            <Route exact path="/">
              <Splash theme={chosenTheme} />
            </Route>

            {/* Main portfolio */}
            <Route path="/home">
              <Main theme={chosenTheme} />
            </Route>

            {/* Fallback route: redirect all unknown paths to /home */}
            <Route path="*">
              <Main theme={chosenTheme} />
            </Route>
          </Switch>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
