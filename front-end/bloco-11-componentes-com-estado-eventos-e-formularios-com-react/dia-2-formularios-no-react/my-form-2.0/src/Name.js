import React from "react";

class Name extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label> Nome:
        <input 
          name="name" 
          onChange={handleChange}
          value={value}
          type="text"
          maxLength="40" 
          required 
        />
      </label>
    )
  }
}

export default Name;