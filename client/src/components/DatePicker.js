import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-date-picker';

class ChooseDate extends React.Component {
  state = {
    date: new Date(),
  }
  
  onChange = date => this.setState({ date })
  
  render() {
    return (
      <div className="date-picker">
      <h4>Choose a date</h4>
      <DatePicker
      onChange={this.onChange}
      value={this.state.date}
      />
      </div>
    )
  }
  
};

export default ChooseDate;
