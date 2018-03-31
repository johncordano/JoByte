import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import ViewJob from './ViewJob';
// import SummaryGraph from './SummaryGraph';

class MyActions extends Component {
  state = {};

  render() {
    return (
      <div className="table-job">
        <h2>Your outstanding actions</h2>
        <table className="rtable">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Completed</th>
              <th />
            </tr>
          </thead>
          <tbody className="tbody saved-jobs" id="saved-jobs">
            {this.props.actions.map(data => {
              return (
                <tr key={data._id}>
                  <td>{data.date}</td>
                  <td>{data.description}</td>
                  <td>{JSON.stringify(data.status)}</td>
                  <td>
                    {/*<Link
                      to={{
                        pathname: '/job/view',
                        state: {
                          jobInfo: data
                        }
                      }}
                    >
                      <button data-id={data._id} id="view-btn">
                        View
                      </button>
                    </Link> */}
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

export default MyActions;
