const sinon = require('sinon');
const { expect } = require('chai');

const MoviesService = require('../../services/movieService');
const MoviesController = require('../../controllers/movieController');

describe('Testa o controller de getById', () => {

  describe('Testa caso de sucesso', () => {

    const req = {};
    const res = {};

    before(async () => {
      req.params = { id: 1 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(MoviesService, 'getById').resolves({
        code: 200,
        data: {
          id: 1,
          title: 'Filme #01',
          directedBy: 'Diretor #01',
          releaseYear: 2022,
        }
      });
    });

    after(async () => {
      MoviesService.getById.restore();
    });

    it('Verifica se retorna o status 200', async () => {
      await MoviesController.getById(req, res);
      expect(res.status.calledWith(200)).to.be.true; 
    });

  });

  describe('Testa o caso de falha', () => {

    const req = {};
    const res = {};

    before(async () => {
      req.params = { id: 999 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(MoviesService, 'getById').resolves({
        error: {
          code: 404,
          message: 'Filme não encontrado',
        }
      });
    });

    after(async () => {
      MoviesService.getById.restore();
    });

    it('Testa se retorna o status 404', async () => {
      await MoviesController.getById(req, res);
      expect(res.status.calledWith(404)).to.be.true;
    });
  });
});