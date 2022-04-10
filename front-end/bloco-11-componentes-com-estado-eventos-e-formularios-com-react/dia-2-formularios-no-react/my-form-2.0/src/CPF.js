import React from "react";

class CPF extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label> CPF:
        <input 
          name="cpf"
          onChange={handleChange}
          value={value}
          type='text' 
          maxLength='11' 
          required />
      </label>
    )
  }
}

export default CPF;