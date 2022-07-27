const readline = require('readline-sync');

const calcImc = (weight, height ) => {
    const imc = (weight / height ** 2).toFixed(2);
    let situation;

    switch(true) {
        case (imc < 18.5):
            situation = 'Abaixo do peso (magreza)';
            break;
        case (imc >= 18.5 && imc <= 24.9):
            situation = 'Peso normal';
            break;
        case (imc >= 25 && imc <= 29.9):
            situation = 'Acima do peso (sobrepeso)';
            break;
        case (imc >= 30 && imc <= 34.9):
            situation = 'Obesidade grau I';
            break;
        case (imc >= 35 && imc <= 39.9):
            situation = 'Obesidade grau II';
            break;
        case (imc >= 40):
            situation = 'Obesidade grau III';
            break;
        default:
            situation = 'Não foi possível calcular a situação';
    }

    return `O imc é ${imc} - ${situation}`;
}

const weight = readline.questionFloat('Qual seu peso? ');
const height = readline.questionFloat('Qual sua altura? ');
console.log(calcImc(weight, height));

module.exports = calcImc;