import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

class App extends Component {
  render() {
    return <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/dashboard/:id' component={Dashboard} />
          </Switch>
        </div>
      </Router>;
  }
}

export default App;
