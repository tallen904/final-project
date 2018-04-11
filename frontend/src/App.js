import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Carpool from './pages/Carpool'

class App extends Component {
  render() {
    return <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path ='/carpool' component={Carpool} />
            <Route path='/dashboard/:id' component={Dashboard} />
          </Switch>
        </div>
      </Router>;
  }
}

export default App;
