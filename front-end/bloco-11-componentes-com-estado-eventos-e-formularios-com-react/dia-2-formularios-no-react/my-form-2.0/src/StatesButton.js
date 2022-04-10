import React from "react";

class Button extends React.Component {
  render() {
    const { infoStatus } = this.props;
    return (
      <button onClick={infoStatus}>Sumbit</button>
    )
  }
}

export default Button;