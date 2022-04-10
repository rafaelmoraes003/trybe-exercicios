import React from "react";

const brazilStates = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espirito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso do Sul",
  "Mato Grosso",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

class State extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>Estado:
        <select name="states" onChange={handleChange} value={value} required>
          <optgroup> <option>Estados</option> </optgroup>
            {brazilStates.map((state) => {
            return <option key={state} >{state}</option>
            })}
      </select>
      </label>
    )
  }
}

export default State