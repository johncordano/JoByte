import React, { Component } from 'react';
import API from '../utils/API';
import Sidebar from './Sidebar';
import ActionModal from './ActionModal';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contactsArray: [''],
    isModalOpen: false,
    name: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    notes: ''
  };

  componentDidMount() {
    this.loadContacts();
  }

  loadContacts = () => {
    API.getContacts()
      .then(res => {
        this.setState({ contactsArray: res.data });
      })
      .catch(err => console.log(err));
  };

  toggleOpen = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.handleReset();

    API.addContact({
      name: this.state.name,
      company: this.state.company,
      position: this.state.position,
      email: this.state.email,
      phone: this.state.phone,
      notes: this.state.notes
    })
      .then(this.loadContacts())
      .then(this.toggleOpen())
      .catch(err => console.log(err));
  };

  handleContactInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
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

  handleContactDelete = event => {
    event.preventDefault();
    // console.log(this.props.actions[0]._id)
    API.deleteContact({ id: event.target.getAttribute('data-id') })
      .then(this.loadContacts())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="page">
        <Sidebar path={this.props.match.path} />
        <div className="contacts-container">
          {this.state.contactsArray.length === 0 ? (
            <div className="empty-contacts">
              <h4>You have not added any contacts yet.</h4>
              <button onClick={this.toggleOpen} className="add-contact-btn">
                Add Contact
              </button>
            </div>
          ) : (
            <div>
              <div className="contacts-header">
                <h3>Contacts</h3>
                <button onClick={this.toggleOpen} className="add-contact-btn-header">
                  Add Contact
                </button>
              </div>
              <table className="rtable">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Position</th>
                    <th>E-mail</th>
                    <th>Phone</th>
                    <th>Notes</th>
                    <th />
                  </tr>
                </thead>

                <tbody className="tbody saved-jobs" id="saved-jobs">
                  {this.state.contactsArray.map((data, i) => {
                    return (
                      <Contact
                        loadContacts={this.loadContacts}
                        handleContactDelete={this.handleContactDelete}
                        data={data}
                        key={data._id}
                      />
                      // <tr key={i}>
                      //   <td>{data.name}</td>
                      //   <td>{data.company}</td>
                      //   <td>{data.position}</td>
                      //   <td>{data.email}</td>
                      //   <td>{data.phone}</td>
                      //   <td>{data.notes}</td>
                      //   <td>
                      //     <button
                      //       data-id={data._id}
                      //       className="delete-contact-btn"
                      //       id="view-btn"
                      //       onClick={this.handleContactDelete}
                      //     >
                      //       x
                      //     </button>
                      //   </td>
                      // </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          <ActionModal show={this.state.isModalOpen} onClose={this.toggleOpen}>
            <h2 className="add-contact-h2">Add a Contact</h2>
            <form className="add-contact">
              <input
                className="input-label"
                value={this.state.name}
                onChange={this.handleContactInputChange}
                name="name"
                placeholder="Name"
              />
              <input
                className="input-label"
                value={this.state.company}
                onChange={this.handleContactInputChange}
                name="company"
                placeholder="Company"
              />
              <input
                className="input-label"
                value={this.state.position}
                onChange={this.handleContactInputChange}
                name="position"
                placeholder="Position"
              />
              <input
                className="input-label"
                value={this.state.email}
                onChange={this.handleContactInputChange}
                name="email"
                placeholder="E-mail"
              />
              <input
                className="input-label"
                value={this.state.phone}
                onChange={this.handleContactInputChange}
                name="phone"
                placeholder="Phone (012-345-6789)"
              />
              <input
                className="input-label"
                value={this.state.notes}
                onChange={this.handleContactInputChange}
                name="notes"
                placeholder="Notes"
              />

              <button className="add-todo-btn" onClick={this.handleFormSubmit}>
                Create
              </button>
            </form>
          </ActionModal>
        </div>
      </div>
    );
  }
}

export default Contacts;
