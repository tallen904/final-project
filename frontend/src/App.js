import React, { Component } from 'react';
import './css/app.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';

class App extends Component {
  render() {
    return <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path ='/details' component={Details} />
            <Route path='/dashboard/:id' component={Dashboard} />
          </Switch>
        </div>
      </Router>;
  }
}

export default App;
