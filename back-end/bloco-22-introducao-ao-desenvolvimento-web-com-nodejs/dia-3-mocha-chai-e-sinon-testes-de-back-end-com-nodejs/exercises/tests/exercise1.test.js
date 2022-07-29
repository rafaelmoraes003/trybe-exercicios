const  { expect } = require("chai");
const { validateNumber } = require('../exercise1');

describe("Testa a função validateNumber - numbers", () => {
    it("Testa se é positivo", () => {
        expect(validateNumber(1)).equals("positivo");
    });

    it("Testa se é negativo", () => {
        expect(validateNumber(-1)).equals("negativo");
    });

    it("Testa se é neutro", () => {
        expect(validateNumber(0)).equals("neutro");
    });
});

describe("Testa a função validateNumber - NaN", () => {
    it("Testa se retorna erro", () => {
        expect(validateNumber("string")).equals("o valor deve ser um número");
    });
});