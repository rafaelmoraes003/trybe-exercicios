import React from "react";

class Email extends React.Component {
  render() {
    const { value, handleChange, validateEmail } = this.props;
    
    return (
      <label> Email:
        <input 
          name="email"
          value={value} 
          onChange={handleChange}
          onBlur={validateEmail}
          type="text"  
          maxLength="50"
          required 
        />
      </label>
    )
  }
}

export default Email;