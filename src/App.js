import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/aos.css";
import "./css/styles.css";
import "./css/responsive.css";
import "./css/icons/font-awesome-4.7.0/css/font-awesome.min.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Mentions from "./components/Mentions";

// Animations
import WOW from "wow.js";

class App extends Component {
  state = {
    title: "Aws monstre",
  };

  // Animations
  componentDidMount() {
    new WOW().init();
  }

  render() {
    return (
      <Fragment>
        <NavBar />

        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
              <About />
              <Experience />
              <Skills />
              <Contact />
            </Route>
            <Route path="/mentions-légales">
              <Mentions />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
