const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const server = require('../api/app');

const { User } = require('../models');
const { User: UserMock } = require('./mock/models');
const userJSON = require('./mock/models/Users.json');

chai.use(chaiHttp);

const { expect } = chai;

describe('GET /api/users/:id', () => {

    before(() => {
        sinon.stub(User, 'findOne').callsFake(UserMock.findOne);
        sinon.stub(User, 'findByPk').callsFake(UserMock.findByPk);
    });

    after(() => {
        User.findOne.restore();
        User.findByPk.restore();
    });

    describe('Testa o endpoint sem passar jwt', () => {
        let response;

        before(async () => {
            response = await chai
                .request(server)
                .get('/api/users/1');
        });

        it('Verifica se retorna status 400', () => {
            expect(response).to.have.status(400);
        });

        it('Verifica se retorna mensagem de token não encontrado', () => {
            expect(response.body.message).to.equals('Token não encontrado ou informado');
        });
    });

    describe('Testa buscar um id não autorizado', () => {
        let loginResponse;
        let response;

        before(async () => {
            loginResponse = await chai
            .request(server)
            .post('/api/login')
            .send({
                username: userJSON[0].username,
                password: userJSON[0].password,
            });

            response = await chai
            .request(server)
            .get('/api/users/2')
            .set('authorization', loginResponse.body.token); 
        });

        it('Verifica se retorna status 401', () => {
            expect(response).to.have.status(401);
        });

        it('Verifica se retorna mensagem de acesso negado', () => {
            expect(response.body.message).to.equals('Acesso negado');
        });
    });

    describe('Testa a busca em caso de sucesso', () => {
        let loginResponse;
        let response;

        before(async () => {
            loginResponse = await chai
            .request(server)
            .post('/api/login')
            .send({
                username: userJSON[0].username,
                password: userJSON[0].password,
            });

            response = await chai
            .request(server)
            .get('/api/users/1')
            .set('authorization', loginResponse.body.token);
        });

        it('Verifica se retorna status 200', () => {
            expect(response).to.have.status(200);
        });

        it('Verifica se retorna um objeto', () => {
            expect(response).to.be.an('object');
        });
    });

});
