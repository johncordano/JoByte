import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import ViewJob from './ViewJob';
// import SummaryGraph from './SummaryGraph';
import ActionModal from './ActionModal';
import DatePicker from 'react-date-picker';

class YourActions extends Component {
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
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody className="tbody saved-jobs" id="saved-jobs">
            {this.props.actions.map(data => {
              return (
                <tr key={data._id}>
                  <td>{data.date}</td>
                  <td>{data.description}</td>
                  <td>{data.status}</td>
                  <td>              
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

export default YourActions;
