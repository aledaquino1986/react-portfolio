import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/app.scss";
import Homepage from "./components/Homepage";
import Contact from "./components/Contact";
import Projects from "./components/projects/Projects";

import Layout from "./components/layout/Layout";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
