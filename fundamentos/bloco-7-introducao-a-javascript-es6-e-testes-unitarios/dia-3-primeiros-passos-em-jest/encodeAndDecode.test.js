const {encode, decode} = require('./encodeAndDecode');

describe('Para as funções encode e decode crie os seguintes testes em Jest:', () => {
    test('verify if encode and decode are functions', () => {
        expect(typeof encode).toBe('function');
        expect(typeof decode).toBe('function');
    })
    
    test('encode a,e,i,o,u to 1,2,3,4,5 respectively', () => {
        expect(encode("hello world")).toBe("h2ll4 w4rld")
    })
    
    test('decode 1,2,3,4,5 to a,e,i,o,u respectively', () => {
        expect(decode("h2ll4 w4rld")).toBe("hello world")
    })
    
    test('if other letter and numbers are not encoded nor decoded', () => {
        expect(encode("hyrk78")).toBe("hyrk78");
        expect(decode("890jk")).toBe("890jk")
    })
    
    test('if strings length stays the same', () => {
        expect(encode('trybe').length).toBe(5);
        expect(decode('trybe').length).toBe(5);
    })
})