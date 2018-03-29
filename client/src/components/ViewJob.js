import React, { Component } from 'react';
import Navbar from './Navbar';

class ViewJob extends Component {
  render() {
    console.log(this.props.job);
    return (
      <div>
        <Navbar />
        <div className="centralized">
          <h2>{this.props.company}</h2>
          <h4>Position</h4>
          <div className="job-info">
            <div className="input">
              <h4>Company</h4>
              <input type="text" id="date-applied" value="" />
              <hr />
            </div>
            <div className="input">
              <h4>Position</h4>
              <input type="text" id="date-applied" value="" />
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewJob;
