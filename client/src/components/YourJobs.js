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
              <th>Company</th>
              <th>Position</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody className="tbody saved-jobs" id="saved-jobs">
            {this.props.jobs.forEach((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.company}</td>
                  <td>{data.position}</td>
                  <td>{data.status}</td>
                  <td style={{ float: 'right' }}>
                    {data.link ? (
                      <a href={data.link} target="_blank">
                        <button className="link-job-btn"> Link to Job</button>
                      </a>
                    ) : (
                      <div />
                    )}

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
