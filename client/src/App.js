import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Error404 from "./pages/Error404";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>

        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/services'>
          <Services />
        </Route>
        <Route component={Error404} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
