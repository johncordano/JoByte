import React, { Component } from 'react';
import moment from 'moment';
import API from '../utils/API';

class YourActions extends Component {
  state = {
    isModalOpen: false
  };

  handleActionDelete = event => {
    event.preventDefault();
    // console.log(this.props.actions[0]._id)
    API.deleteAction({ id: event.target.getAttribute('data-id') })
      .then(this.props.loadActions())
      .catch(err => console.log(err));
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
                  <td>{moment(data.date).format('MM/DD/YYYY')}</td>
                  <td>{data.description}</td>
                  <td>{data.status}</td>
                  <td>
                    <button
                      data-id={data._id}
                      className="delete-action-btn"
                      id="view-btn"
                      onClick={this.handleActionDelete}
                    >
                      x
                    </button>
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
