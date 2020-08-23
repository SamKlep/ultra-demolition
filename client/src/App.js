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
        <Route exact path='/' component={Home} />

        <Route exact path='/about' component={About} />

        <Route exact path='/contact' component={Contact} />

        <Route exact path='/projects' component={Projects} />

        <Route exact path='/services' component={Services} />

        <Route component={Error404} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
