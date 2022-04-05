import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return conteudos.map((element, index) => {
      const conteudo = `Conteúdo: ${element.conteudo}`;
      const status = `Status: ${element.status}`;
      const bloco = `Bloco: ${element.bloco}`;
      return <li className="listItem" key={index}>
        {/* {conteudo} - {status} - {bloco} */}
        <p>{conteudo}</p>
        <p>{status}</p>
        <p>{bloco}</p>
      </li>
    });
  };
}

export default Content;