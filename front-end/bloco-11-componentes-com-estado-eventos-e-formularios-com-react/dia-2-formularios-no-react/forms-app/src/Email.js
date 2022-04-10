import React from "react";

class Email extends React.Component {
  render() {
    const { handleState } = this.props;
    return (
      <label>Qual seu email?
          <input name="email" type="email" onChange={handleState}></input>
      </label>
    )
  }
}

export default Email