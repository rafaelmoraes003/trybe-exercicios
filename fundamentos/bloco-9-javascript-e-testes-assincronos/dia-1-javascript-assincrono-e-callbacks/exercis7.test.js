const { test, expect } = require("@jest/globals");

// Escreva um teste que verifique a chamada da callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('uperrcase callback is a uppercase functions', (done) => {
  uppercase('boa tarde', callback => {
    try {
      expect(callback).toBe('BOA TARDE');
      done();
    } catch (error) {
      done(error);
    }
  })
})