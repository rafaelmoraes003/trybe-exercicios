const myFizzBuzz = require('./myFizzBuzz');

describe('A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número', () => {
    test('add number divisible by 3 and 5 at the same time', () => {
        expect(myFizzBuzz(15)).toBe("fizzbuzz")
    })
    
    test('add number divisible only by 3', () => {
        expect(myFizzBuzz(6)).toBe("fizz");
    })
    
    test('add number divisible only by 5', () => {
        expect(myFizzBuzz(5)).toBe("buzz");
    })
    
    test('add number not divisible by 3 AND 5', () => {
        expect(myFizzBuzz(4)).toBe(4)
    })
    
    test('add a NaN', () => {
        expect(myFizzBuzz("hello")).toBe(false);
    })
})