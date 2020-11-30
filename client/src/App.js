import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Error404 from './pages/Error404'

import Header from './components/ui/Header'
import HomeScreen from './components/screens/HomeScreen'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={HomeScreen} />

        {/* <Route path='/about' component={About} />

        <Route path='/contact' component={Contact} />

        <Route path='/services' component={Services} /> */}

        <Route component={Error404} />
      </Switch>
    </Router>
  )
}

export default App
