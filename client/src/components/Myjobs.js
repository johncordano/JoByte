import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../utils/API';
// import ViewJob from './ViewJob';
// import SummaryGraph from './SummaryGraph';

class Myjobs extends Component {
  state = {
    dropDownSelection: 'blah'
  };

  // handleChange = (event, id) => {
  //   this.setState({ dropDownSelection: event.target.value });
  //   API.updateJob({
  //     id,
  //     status: this.state.status
  //   }).catch(err => console.log(err));
  // };

  render() {
    // console.log(this.state.status);
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

                  <td>
                    {/* <select value={this.state.dropDownSelection} onChange={this.handleChange(data._id)}> */}
                    <select value={this.state.dropDownSelection}>
                      <option select value="researching">
                        Researching
                      </option>
                      <option value="applied">Applied</option>
                      <option value="interviewing">Interviewing</option>
                      <option value="awaiting-response">Awaiting Response</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </td>
                  <td>
                    <Link
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
