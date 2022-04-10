import React from "react";

class Idade extends React.Component {
  render() {
    const { value, handleState } = this.props

    let error = undefined;
    if (value > 120) error = 'Idade indisponível'

    return (
      <label> Qual sua idade?
          <input name="idade" type="number" onChange={handleState}></input>
          <p style={{ color: 'red' }}>{error ? error : ''}</p>
      </label>
      
    )
  }
}

export default Idade