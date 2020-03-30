import React, { Component } from "react";

class DelayedButton extends Component {
  handleClick = event => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };

  render() {
    console.log("ho");
    return <button onClick={this.handleClick}>Button 2</button>;
  }
}

export default DelayedButton;
