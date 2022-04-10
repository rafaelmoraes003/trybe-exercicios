import React from "react";

class Estado extends React.Component {
  render() {
    const { handleState } = this.props;
    return (
      <label> Selecione seu estado
        <select name="state" onChange={handleState}>
            <option>São Paulo</option>
            <option>Paraná</option>
        </select>
      </label>
    )
  }
}

export default Estado;