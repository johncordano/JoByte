import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

// Components
import Dashboard from './components/Dashboard';
import AddJob from './components/AddJob';
// import Myjobs from './components/Myjobs';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/job/new" component={AddJob} />
      </div>
    );
  }
}

export default App;
