import React from "react";
import { HashRouter as Link, Switch } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Services from "./pages/Services";
import Error404 from "./pages/Error404";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Switch>
        <Link exact path='/' component={Home} />
        <Link path='/about' component={About} />

        <Link path='/contact' component={Contact} />
        <Link path='/services' component={Services} />
        <Link component={Error404} />
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
