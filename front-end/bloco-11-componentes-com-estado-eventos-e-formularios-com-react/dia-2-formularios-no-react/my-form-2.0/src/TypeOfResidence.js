import React from "react";

class Type extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label>Tipo de residência
        <label>Casa
           <input type="radio" name="typeOfResidence" required onChange={handleChange} value="Casa" />
         </label>
         <label>Apartamento
           <input type="radio" name="typeOfResidence" onChange={handleChange} value="Apartamento" />
         </label>
      </label>
    )
  }
}

export default Type;