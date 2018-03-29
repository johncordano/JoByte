import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Navbar from './Navbar';
// import SummaryGraph from './SummaryGraph';

class Myjobs extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     tableVisible: false
  //   };
  // }

  render() {
    return (
      <div className="centralized">
        {/* <Navbar /> */}
        <div className="header-btn total-applied" />
      </div>
    );
  }

  // onClick() {
  //   this.setState(prevState => ({ tableVisible: !prevState.tableVisible }));
  // }
}

export default Myjobs;
