const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Busca um filme por Id no banco de dados', () => {

  describe('Testa caso de sucesso', () => {

    before(async () => {
      sinon.stub(connection, 'execute').resolves([[{
          id: 1,
          title: 'Filme #01',
          directedBy: 'Diretor #01',
          releaseYear: 2022,
      }]]);
    });

    after(async () => {
      connection.execute.restore();
    });

    it('Verifica se retorna um objeto', async () => {
      const response = await MoviesModel.getById(1);
      expect(response).to.be.an('object');
    });

    it('Verifica se retorna o id correto', async () => {
      const response = await MoviesModel.getById(1);
      expect(response.id).to.be.equal(1);
    });
  });

  describe('Testa caso de falha', () => {
    before(async () => {
      sinon.stub(connection, 'execute').resolves([[]]);
    });

    after(async () => {
      connection.execute.restore();
    });

    it('Verifica se retorna undefined', async () => {
      const response = await MoviesModel.getById(1);
      expect(response).to.be.undefined;
    });
  });
});