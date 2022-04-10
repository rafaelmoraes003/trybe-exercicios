import React from "react";
import Estado from "./Estado";
import Email from "./Email";
import Idade from "./Idade";
import Sugestao from "./Sugestao";
import Inputs from "./Inputs";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      state: '',
      idade: 0,
      email: '',
      sugestao: '',
      infos: false,
      file: '',
      formularioComErros: true,
    }

    this.handleState = this.handleState.bind(this);
  }

  handleState({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <Estado handleState={this.handleState} />
        <Idade handleState={this.handleState} value={this.state.idade} />
        <Email handleState={this.handleState}/>
        <Sugestao handleState={this.handleState} value={this.state.sugestao} />
        <Inputs handleState={this.handleState}/>
      </form>
    );
  }
}

export default App;
