const sum  = require('./sum');

describe('A função sum(a, b) retorna a soma do parâmetro a com o b.', () => {
    test('adds 4 + 5 is 9', () => {
        expect(sum(4, 5)).toBe(9);
    })
    
    test('adds 0 + 0 is 0', () => {
        expect(sum(0, 0)).toBe(0);
    })
    
    test('verify if parameters are numbers', () => {
        expect(() => {sum(4, '5')}).toThrow();
    })
})