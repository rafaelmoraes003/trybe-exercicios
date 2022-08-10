const sinon = require('sinon');
const { expect } = require('chai');
const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Busca um filme por Id', () => {

  describe('Busca em caso de sucesso', async () => {

    before(async () => {
      sinon.stub(MoviesModel, 'getById').resolves({
        id: 1,
        title: 'Filme #01',
        directedBy: 'Diretor #01',
        releaseYear: 2022,
      });
    });

    after(async () => {
      MoviesModel.getById.restore();
    });

    it('Verifica se retorna um objeto', async () => {
      const response = await MoviesService.getById(1);
      expect(response).to.be.an('object');
    });

    it('Verifica se o objeto tem as chaves corretas', async () => {
      const response = await MoviesService.getById(1);
      expect(response).to.have.keys('code', 'data');
    });

  });

  describe('Verifica em caso de falha', async () => {

    before(async () => {
      sinon.stub(MoviesModel, 'getById').resolves(undefined);
    });

    after(async () => {
      MoviesModel.getById.restore();
    });

    it('Verifica se retorna um objeto de erro', async () => {
      const response = await MoviesService.getById(999);
      expect(response).to.be.a('object');
    });

    it('Verifica se retorna uma chave de erro ', async () => {
      const response = await MoviesService.getById(999);
      expect(response).to.have.key('error');
    });
  });

});