import React, { Component } from 'react';
import API from '../utils/API';

class Contact extends Component {
  state = {
    isEditing: false,
    // contactsArray: [''],
    // isModalOpen: false,
    name: this.props.data.name,
    company: this.props.data.company,
    position: this.props.data.position,
    email: this.props.data.email,
    phone: this.props.data.phone,
    notes: this.props.data.notes
  };

  toggleIsEditing = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  };

  handleSave = () => {
    API.updateContact({
      id: this.props.data._id,
      name: this.state.name,
      company: this.state.company,
      position: this.state.position,
      email: this.state.email,
      phone: this.state.phone,
      notes: this.state.notes
    })
      .then(this.props.loadContacts())
      .then(this.toggleIsEditing())
      .catch(err => console.log(err));
  };


  handleReset = () => {
    this.setState({
      name: '',
      company: '',
      position: '',
      email: '',
      phone: '',
      notes: ''
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleContactDelete = event => {
    event.preventDefault();
    // console.log(this.props.actions[0]._id)
    API.deleteContact({ id: event.target.getAttribute('data-id') })
      .then(this.loadContacts())
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.isEditing) {
      return(
        <tr>
          <td>
            <input 
              name='name'
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </td>
          <td>
            <input 
              name='company'
              value={this.state.company}
              onChange={this.handleInputChange}
            />
          </td>
          <td>
            <input 
              name='position'
              value={this.state.position}
              onChange={this.handleInputChange}
            />
          </td>
          <td>
            <input 
              name='email'
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </td>
          <td>
            <input 
              name='phone'
              value={this.state.phone}
              onChange={this.handleInputChange}
            />
          </td>
          <td>
            <input 
              name='notes'
              value={this.state.notes}
              onChange={this.handleInputChange}
            />
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
              onClick={this.props.handleContactDelete}
            >
              x
            </button>
          </td>
        </tr>
      )
    }
    return (
      <tr key={this.props.i}>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.company}</td>
        <td>{this.props.data.position}</td>
        <td>{this.props.data.email}</td>
        <td>{this.props.data.phone}</td>
        <td>{this.props.data.notes}</td>
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

export default Contact;
