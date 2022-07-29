const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs').promises;
const { writeFileAsync } = require('../exercise2');

const fileName = './teste.txt';
const fileContent = 'teste com tdd';

describe('Testa a função writeFile', () => {
    describe('testa caso de sucesso', () => {

        before(() => {
            sinon.stub(fs, 'writeFile').resolves();
        });

        after(() => {
            fs.writeFile.restore();
        });

        it('testa o retorno ok', async () => {
            const result = await writeFileAsync(fileName, fileContent);
            expect(result).equals('ok!')
        });

    });

    describe('testa caso de erro', () => {

        before(() => {
            sinon.stub(fs, 'writeFile').rejects();
        });

        after(() => { 
            fs.writeFile.restore();
        });

        it('testa o retorno de erro', async () => {
           const result = await writeFileAsync();
           expect(result).equals('[ERROR]');
        });
    });
});
