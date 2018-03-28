import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';

// Components
import AddJob from './components/AddJob';
import Dashboard from './components/Dashboard';
import Myjobs from './components/Myjobs';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Dashboard} />
      </div>
    );
  }
}

export default App;
