import React, { Component } from 'react';
import './css/app.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Event from './pages/Event';

class App extends Component {
  render() {
    return <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path ='/event/:id' component={Event} />
            <Route path='/dashboard/:id' component={Dashboard} />
          </Switch>
        </div>
      </Router>;
  }
}

export default App;
