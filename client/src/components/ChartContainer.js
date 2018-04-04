import React, { Component } from 'react';
import { BarChart } from 'react-easy-chart';

class ChartContainer extends Component {
  mouseOverHandler = (d, e) => {
    this.setState({
      showToolTip: true,
      top: `${e.screenY - 10}px`,
      left: `${e.screenX + 10}px`,
      y: d.y,
      x: d.x
    });
  };

  mouseMoveHandler = e => {
    if (this.state.showToolTip) {
      this.setState({ top: `${e.y - 10}px`, left: `${e.x + 10}px` });
    }
  };

  mouseOutHandler = () => {
    this.setState({ showToolTip: false });
  };

  render() {
    return (
      <div className="App">
        <BarChart
          grid
          axes
          colorBars
          height={300}
          width={900}
          data={[
            { x: 'Researching', y: this.props.researching, color: '#C46882' },
            { x: 'Applied', y: this.props.applied, color: '#975DA8' },
            { x: 'Interviews Scheduled', y: this.props.interviewing, color: '#9186FB' },
            { x: 'Awaiting Response', y: this.props.awaiting, color: '#86DDE4' },
            { x: 'Resolved', y: this.props.resolved, color: '#99D285' }
          ]}
          mouseOverHandler={this.mouseOverHandler}
          mouseOutHandler={this.mouseOutHandler}
          mouseMoveHandler={this.mouseMoveHandler}
          yDomainRange={[0, 10]}
        />
      </div>
    );
  }
}

export default ChartContainer;
