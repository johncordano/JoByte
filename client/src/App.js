import React, { Component } from 'react';
import { Route, Switch, withRouter, BrowserRouter } from 'react-router-dom';
import AddJob from './components/AddJob';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={AddJob} />
      </BrowserRouter>
    );
  }
}

export default App;
