import React from "react";

class RoleDescription extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>Descrição do Cargo
        <input name="roleDescription" type="text" value={value} onChange={handleChange} required />
      </label>
    )
  }
}

export default RoleDescription;