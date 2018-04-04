import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import API from '../utils/API';
// import ViewJob from './ViewJob';
// import SummaryGraph from './SummaryGraph';

class YourJobs extends Component {
  render() {
    return (
      <div>
        <table className="rtable">
          <thead>
            <tr>
              <th width="60px">Company</th>
              <th width="60px">Position</th>
              <th width="100px">Link</th>
              <th width="60px">Status</th>
              <th width="10px" />
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
                  <td style={{ float: 'right' }}>
                    <Link
                      to={{
                        pathname: '/job/view',
                        state: {
                          jobInfo: data
                        }
                      }}
                    >
                      <button data-id={data._id} className="view-btn">
                        View Details
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

export default YourJobs;
