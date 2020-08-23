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
        <Route to='/about'>
          <About />
        </Route>
        <Route to='/contact'>
          <Contact />
        </Route>

        <Route to='/projects'>
          <Projects />
        </Route>
        <Route to='/services'>
          <Services />
        </Route>
        <Route component={Error404} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
