import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

// Components
import Dashboard from './components/Dashboard';
import AddJob from './components/AddJob';
import ViewJob from './components/ViewJob';
import API from './utils/API';
import Login from './components/Login';
// import Myjobs from './components/Myjobs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobsArray: [],
      actionsArray: []
    };
  }

  componentDidMount() {
    this.loadJob();
    this.loadActions();
  }

  loadJob = () => {
    API.getJob()
      .then(res => this.setState({ jobsArray: res.data }))
      .catch(err => console.log(err));
  };

  loadActions = () => {
    API.getAllAction()
      .then(res => this.setState({ actionsArray: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Route
          exact
          path="/login"
          render={() => {
            return <Login />;
          }}
        />
        <Route
          exact
          path="/"
          render={() => {
            return <Dashboard jobs={this.state.jobsArray} actions={this.state.actionsArray}/>;
          }}
        />
        <Route exact path="/job/new" component={AddJob} />
        <Route path="/job/view" component={ViewJob} />
      </div>
    );
  }
}

export default App;
