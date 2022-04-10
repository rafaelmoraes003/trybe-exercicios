import React from "react";

class TextArea extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>Resumo do Currículo
        <textarea 
          name="textArea"
          onChange={handleChange}
          value={value}
          maxLength="1000"
          required
        />
      </label>
    )
  }
}

export default TextArea;