import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/app.scss";
import Homepage from "./pages/homepage/Homepage";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import Error from "./pages/error/Error";

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
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
