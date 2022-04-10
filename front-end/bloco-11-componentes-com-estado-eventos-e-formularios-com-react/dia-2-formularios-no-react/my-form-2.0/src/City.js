import React from "react";

class City extends React.Component {
  render() {
    const { value, removeSWN, handleChange } = this.props;
    return (
      <label>Cidade:
        <input 
          name="city"
          onChange={handleChange}
          onBlur={removeSWN}
          value={value}
          type='text' 
          maxLength='28' 
          required 
        />
      </label>
    )
  }
}

export default City;