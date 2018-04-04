import React, { Component } from 'react';
import Sidebar from './Sidebar';

class Contacts extends Component {
  render() {
    return (
      <div className="page">
        <Sidebar path={this.props.match.path} />
        <div className="main-addjob">
          <table className="rtable">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Completed</th>
                <th />
              </tr>
            </thead>
            <tbody className="tbody saved-jobs" id="saved-jobs" />
          </table>
        </div>
      </div>
    );
  }
}

export default Contacts;
