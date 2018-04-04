import React, { Component } from 'react';
import Sidebar from './Sidebar';

class Contacts extends Component {
  render() {
    return (
      <div className="page">
        <Sidebar path={this.props.match.path} />
        <div className="interview-container">
          <h2>Coming soon!</h2>
        </div>
      </div>
    );
  }
}

export default Contacts;
