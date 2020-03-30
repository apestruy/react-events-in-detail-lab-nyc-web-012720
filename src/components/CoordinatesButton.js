import React, { Component } from "react";

class CoordinatesButton extends Component {
  handleClick = event => {
    const xy = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(xy);
  };

  render() {
    console.log("hi");
    return <button onClick={this.handleClick}>Button 1</button>;
  }
}

export default CoordinatesButton;
