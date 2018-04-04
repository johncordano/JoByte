import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import API from '../utils/API';
import Sidebar from './Sidebar';

// set up the calendar views to use the basic ones from BigCalendar
BigCalendar.momentLocalizer(moment);
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: null
    };
  };
  
  // map through the values in the actions table and set the required fields needed for BigCalendar
  componentDidMount() {
    API.getAllAction()
    .then(res => {
      let events = [];
      res.data.map((action) => {
        let event = {};
        event.id = action._id;
        event.title = action.description;
        event.allDay = true;
        event.start = action.date;
        event.end = action.date;
        events.push(event);
      });
      this.setState({
        events
      });
    })
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="page">
        <Sidebar path={this.props.match.path}/>
        <BigCalendar
          events={this.state.events ? this.state.events : []}
          views={allViews}
          step={60}
          showMultiDayTimes
          defaultDate={new Date()}
          />
      </div>
    );
  }
}

export default Calendar;