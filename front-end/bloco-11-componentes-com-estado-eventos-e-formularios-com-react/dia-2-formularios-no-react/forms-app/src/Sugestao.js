import React from "react";

class Sugestao extends React.Component {
  render() {
    const { value, handleState } = this.props

    let error = undefined;
    if (value.length > 200) error = 'Limite máximo de caracteres: 200'

    return (
      <label> Deixe uma sugestão?
        <textarea  name="sugestao" onChange={handleState}></textarea>
        <p style={{ color: 'red' }}>{error ? error : ''}</p>
      </label>
    )
  }
}

export default Sugestao;