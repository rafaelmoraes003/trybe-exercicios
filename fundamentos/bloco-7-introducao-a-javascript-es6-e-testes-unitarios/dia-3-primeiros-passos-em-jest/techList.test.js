const techList = require('./techList.js');

describe('Testa a função techList', () => {
    it('Testa se a função techList é definida', () => {
        expect(techList).toBeDefined();
    });
    
    it('Testa se techList é uma função', () => {
        expect(typeof techList).toBe('function');
    });
    
    it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Rafael')).toEqual([
      { tech: 'CSS', name: 'Rafael' },
      { tech: 'HTML', name: 'Rafael' },
      { tech: 'JavaScript', name: 'Rafael' },
      { tech: 'Jest', name: 'Rafael' },
      { tech: 'React', name: 'Rafael'}]);
    });
    
    it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
        expect(techList([], 'Rafael')).toBe('Vazio!');
    })
})