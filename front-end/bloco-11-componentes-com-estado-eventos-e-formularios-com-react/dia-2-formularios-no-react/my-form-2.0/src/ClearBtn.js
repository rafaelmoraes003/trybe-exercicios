import React from "react";

class ClearBtn extends React.Component {
  render() {
    const { clearFields } = this.props;
    return (
      <button onClick={clearFields}>Limpar Campos</button>
    )
  }
}

export default ClearBtn;