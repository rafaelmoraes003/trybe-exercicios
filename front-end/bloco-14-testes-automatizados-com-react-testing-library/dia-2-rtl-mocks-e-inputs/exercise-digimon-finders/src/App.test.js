import React from 'react';
import {  findByText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('Teste da aplicação toda', () => {
  afterEach(() => jest.clearAllMocks())
  it('renders App', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /search digimon/i });
    const input = screen.getByLabelText(/digimon/i);
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('testa o retorno da api',  async () => {
    const responseAPI = [{
      "name": "Yokomon",
      "img": "https://digimon.shadowsmith.com/img/yokomon.jpg",
      "level": "In Training"
    }]
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(responseAPI)
    })

    render(<App />);
    const button = screen.getByRole('button', { name: /search digimon/i });
    const input = screen.getByLabelText(/digimon/i);
    expect(input).toHaveValue("");
    userEvent.type(input, "Yokomon");
    expect(input).toHaveValue("Yokomon")
    userEvent.click(button)
    const name = await screen.findByText(/Yokomon/i);
    expect(name).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://digimon-api.vercel.app/api/digimon/name/Yokomon');
  })

  it('testa o retorno da api com digimon inexistente', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        "ErrorMsg": "Xxxx is not a Digimon in our database."
      })
    })
    render(<App />);
    const button = screen.getByRole('button', { name: /search digimon/i });
    const input = screen.getByLabelText(/digimon/i);
    expect(input).toHaveValue("");
    userEvent.type(input, 'XXXX')
    expect(input).toHaveValue("XXXX");
    userEvent.click(button);
    const text = await screen.findByText(/Xxxx is not a Digimon in our database./i);
    expect(text).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledTimes(1);
  })
  test('testa se o fetch é chamado quando o input está vazio', () => {
    jest.spyOn(global, 'fetch')
    render(<App />)
    const button = screen.getByRole('button', { name: /search digimon/i });
    const input = screen.getByLabelText(/digimon/i);
    expect(input).toHaveValue("");
    userEvent.type(input, "");
    expect(input).toHaveValue("")
    userEvent.click(button)
    expect(global.fetch).not.toHaveBeenCalled()
    expect(global.fetch).toHaveBeenCalledTimes(0);
  })
});
