// exercise-bonus.test.js

const searchEmployee = require('./searchEmployee');

describe('Testa a função searchEmployee', () => {
    it('Testa se searchEmployee é uma função', () => {
        expect(typeof searchEmployee).toBe('function');
    });
    
    it('Testa se searchEmployee(id, "firstName") retorna o primeiro nome do usuário da id consultada', () => {
        expect(searchEmployee('5569-4', 'firstName')).toBe('George');
    });

    it('Testa se searchEmployee(id, "lastName") retorna o segundo nome do usuário da id consultada', () => {
        expect(searchEmployee('4678-2', 'lastName')).toBe('Dodds');
    });

    it('Testa se searchEmployee(id, specialities) retorna as especialidades do usuário da id consultada', () => {
        expect(searchEmployee('1256-4', 'specialities')).toEqual([ 'Hooks', 'Context API', 'Tailwind CSS' ]);
    })

    it('Testa se ao não colocar id é lançado um erro.', () => {
        expect(() => {searchEmployee()}).toThrow();
    })

    it('Testa se ao colocar um detail que não exista é lançado um erro.', () => {
        expect(() => {searchEmployee('1256-4', 'street')}).toThrow()
    })
})