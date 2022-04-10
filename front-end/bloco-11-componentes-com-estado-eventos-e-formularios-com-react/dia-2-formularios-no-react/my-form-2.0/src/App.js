import React from "react";
import './App.css';
import Name from "./Name";
import Email from "./Email";
import CPF from "./CPF";
import Address from "./Address";
import City from "./City";
import State from "./State";
import Type from "./TypeOfResidence";
import TextArea from "./TextArea";
import Role from "./Role";
import RoleDescription from "./RoleDescription";
import Button from "./StatesButton";
import ClearBtn from "./ClearBtn";

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      states: '',
      typeOfResidence: 'off',
      textArea: '',
      role: '',
      roleDescription: '',
      showInfos: false,
      mouseEnter: 0,
    }
  }

  handleChange= ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    if (name === 'name') { // SE O NAME FOR 'NAME', COLOCARÁ EM LETRA MAIÚSCULA
      this.setState({
        [name]: value.toUpperCase(),
      })
    } else {
      this.setState({
        [name]: value,
      })
    }
    
  }

  removeSpecialCharacters = ({ target }) => {
    this.setState({
      address: target.value.replace(/[`~´!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
    })
  }

  removeNumber =({ target }) => {
      this.setState({
        city: target.value
      }, () => {
        if (target.value.match(/^\d/)) { // src: https://stackoverflow.com/questions/39736188/check-if-string-starts-with-a-number
          this.setState({
            city: '',
          })
        }
      })
  }

  showCautionMessage = () => {
    this.setState((prev) => ({
      mouseEnter: prev.mouseEnter + 1
    }), () => {
      if (this.state.mouseEnter <= 1) {
        alert('Preencha este campo com cuidado')
      }
    })
  }

  showInfos = () => {
    this.setState({ showInfos: true })
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  clearStates = () => {
    this.setState({
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      states: '',
      typeOfResidence: 'off',
      textArea: '',
      role: '',
      roleDescription: '',
      showInfos: false,
      mouseEnter: 0,
    })
  }

  validateEmail = () => {
    let error = undefined;
    if (!this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      error = 'Digite um email válido.'
      alert(error)
    }
  }

  render() {
    return (
        <>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Dados Pessoais</legend>
              <div>
                <Name value={this.state.name} handleChange={this.handleChange} />
                <Email value={this.state.email} handleChange={this.handleChange} validateEmail={this.validateEmail} />
                <CPF value={this.state.cpf} handleChange={this.handleChange} />
                <Address value={this.state.address} removeSC={this.removeSpecialCharacters} />
                <City value={this.state.city} handleChange={this.handleChange} removeSWN={this.removeNumber} />
                <State value={this.state.states} handleChange={this.handleChange}/>
                <Type  value={this.state.name} handleChange={this.handleChange} />
              </div>
            </fieldset>
            <fieldset>
            <legend>Último Emprego</legend>
              <div>
              <TextArea value={this.state.textArea} handleChange={this.handleChange} />
              <Role value={this.state.role} handleChange={this.handleChange} alertState={this.showCautionMessage} />
              <RoleDescription  value={this.state.roleDescription} handleChange={this.handleChange} />
              </div>
            </fieldset>
          <Button infoStatus={this.showInfos} type="submit"/>
         </form>
         <ClearBtn clearFields={this.clearStates} />
         <div className="infoDiv" style={{display: (this.state.showInfos) ? 'block' : 'none'}}>
            {
              `Nome: ${this.state.name}
              Email: ${this.state.email}
              CPF: ${this.state.cpf}
              Endereço: ${this.state.address}
              Cidade: ${this.state.city}
              Estado: ${this.state.states}
              Tipo de Residência: ${this.state.typeOfResidence}
              Currículo: ${this.state.textArea}
              Cargo: ${this.state.role}
              Descrição do cargo: ${this.state.roleDescription}`
            }
          </div>
        </>
    )
  }
}

export default App;
