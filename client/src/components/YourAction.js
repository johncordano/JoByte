import React, { Component } from 'react';
import moment from 'moment';
import API from '../utils/API';

class YourAction extends Component {
  state = {
    isEditing: false,
    description: this.props.data.description,
    status: this.props.data.status
  };

  toggleIsEditing = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSave = () => {
    API.updateAction({
      id: this.props.data._id,
      description: this.state.description,
      status: this.state.status
    })
      .then(this.props.loadActions())
      .then(this.toggleIsEditing())
      .catch(err => console.log(err))
  }

  render() {
    if (this.state.isEditing) {
      return (
        <tr>
          <td>{moment(this.props.data.date).format('MM/DD/YYYY')}</td>
          <td>
            <input 
              name='description' 
              value={this.state.description} 
              onChange={this.handleInputChange} 
            />
          </td>
          <td>
            <select
              name="status"
              onChange={this.handleInputChange}
              value={this.state.status}
              className="input-label"
            >
              <option value="No Action Needed">No Action Needed</option>
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
         </td>
         <td>
            <button 
              className='link-job-btn'
              onClick={this.handleSave}
              >
              Save
            </button>
            <button
              data-id={this.props.data._id}
              className="delete-action-btn"
              id="view-btn"
              onClick={this.props.handleActionDelete}
            >
              x
            </button>
         </td>
       </tr>
        )
    }

     return (
       <tr>
         <td>{moment(this.props.data.date).format('MM/DD/YYYY')}</td>
         <td>{this.props.data.description}</td>
         <td>{this.props.data.status}</td>
         <td>
            <button 
              className='link-job-btn'
              onClick={this.toggleIsEditing}
              >
              Edit
            </button>
         </td>
       </tr>
     );
  }
}

export default YourAction;
