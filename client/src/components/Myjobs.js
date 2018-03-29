import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ViewJob from './ViewJob';
// import SummaryGraph from './SummaryGraph';

class Myjobs extends Component {
  state = {};

  render() {
    return (
      <div className="table-job">
        <h2>Your saved jobs</h2>
        <table className="rtable">
          <thead>
            <tr>
              <th>Company</th>
              <th>Position</th>
              <th>Link</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody className="tbody saved-jobs" id="saved-jobs">
            {this.props.jobs.map(data => {
              return (
                <tr key={data._id}>
                  <td>{data.company}</td>
                  <td>{data.position}</td>
                  <td>{data.link}</td>
                  <td>{data.status}</td>
                  <td>
                    <Link to="/job/view">
                      <button data-id={data._id} id="view-btn">
                        View
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Myjobs;
