import React from "react";

class Inputs extends React.Component {
  render() {
    const { handleState } = this.props;
    return (
      <fieldset>
        <legend>Inputs:</legend>

          <label> Escolha uma foto legal
            <input onChange={handleState} name="file" type='file'/>
          </label>

          <label> Concorda com o uso das informações?
            <input onChange={handleState}  name='infos' type="checkbox" />
          </label>
          
      </fieldset>
    )
  }
}

export default Inputs;