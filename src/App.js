import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/app.scss";
import Layout from "./components/layout/Layout";

const Homepage = React.lazy(() => import("./pages/homepage/Homepage"));
const Contact = React.lazy(() => import("./pages/contact/Contact"));
const Projects = React.lazy(() => import("./pages/projects/Projects"));
const Error = React.lazy(() => import("./pages/error/Error"));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <React.Suspense fallback={<h2>Loading...</h2>}>
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
        </React.Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
