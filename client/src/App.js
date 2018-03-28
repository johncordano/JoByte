import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import AddJob from './components/AddJob';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={AddJob} />
      </div>
    );
  }
}

export default App;
