import React from "react";

class Address extends React.Component {
  render() {
    const { value, removeSC } = this.props;
    return (
      <label>Endereço:
        <input 
          name="address"
          onChange={removeSC}
          value={value}
          maxLength='200'
          required  
        />
      </label>
    )
  }
}

export default Address;