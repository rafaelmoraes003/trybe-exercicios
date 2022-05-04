import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// arquivo App.test.js pode servir de exemplo
describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Adicionar');
  });

  test('Ao clicar no botão Adicionar a taks dever adicionar na tela', () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    render(<App />);
    const input = screen.getByLabelText('Tarefa:');
    const button = screen.getByRole('button');
    userEvent.type(input, 'Academia');
    userEvent.click(button);

    const item = screen.getAllByRole('listitem');
    expect(item[0]).toHaveTextContent('Academia');
  });
});