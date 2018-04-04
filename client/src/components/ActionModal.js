import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ActionModal extends Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // Modal "window"
    const modalStyle = {
      backgroundColor: '#E3E3E3',
      borderRadius: '5px',
      maxWidth: '500px',
      minHeight: '100px',
      margin: '150px auto',
      padding: '50px',
      textAlign: 'center'
    };

    // Button
    const button = {
      backgroundColor: 'white',
      marginBottom: '10px',
      height: '40px',
      width: '100%',
      border: 'none',
      marginTop: '10px'
    };

    return (
      <div style={backdropStyle}>
        <div style={modalStyle}>
          {this.props.children}

          <div>
            <button className="close-btn" style={button} onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ActionModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default ActionModal;
