import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import ViewJob from './ViewJob';
// import SummaryGraph from './SummaryGraph';
import ActionModal from './ActionModal';
import DatePicker from 'react-date-picker';
import moment from 'moment';

class MyActions extends Component {
  state = {
    isModalOpen: false
  };

  toggleOpen = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  render() {
    return (
      <div className="table-job">
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
                  <td>{moment(data.date).format("MM/DD/YYYY")}</td>
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
