import React, { Component } from 'react';
// import moment from 'moment';
import API from '../utils/API';
import YourAction from './YourAction';

class YourActions extends Component {
  state = {
    isModalOpen: false
  };

  handleActionDelete = event => {
    event.preventDefault();
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
                <YourAction 
                loadActions={this.props.loadActions}
                handleActionDelete={this.handleActionDelete}
                data={data} 
                key={data._id}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default YourActions;
