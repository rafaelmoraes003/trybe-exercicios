import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    render(<App />); // Caso precise de uma nova query adicione no object destructuring
    const input = screen.getByLabelText('Tarefa:');
    const button = screen.getByRole('button');
    listTodo.map((elemento, index) => {
      userEvent.type(input, elemento);
      userEvent.click(button);
      const li = screen.getAllByRole('listitem')
      expect(li[index]).toHaveTextContent(elemento);
    })
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    render(<Item content="Academia" />);
    const text = screen.getByText('Academia');
    expect(text).toBeInTheDocument();
  });
});
