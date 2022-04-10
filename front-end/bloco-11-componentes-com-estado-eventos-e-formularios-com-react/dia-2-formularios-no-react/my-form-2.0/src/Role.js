import React from "react";

class Role extends React.Component {
  render() {
    let x = 0;
    const { value, alertState, handleChange } = this.props;
    return (
      <label>Cargo
        <textarea 
          name="role"
          maxLength="40"
          required
          onChange={handleChange}
          onMouseEnter={alertState}
          value={value}
        />
      </label>
    )
  }
}

export default Role;